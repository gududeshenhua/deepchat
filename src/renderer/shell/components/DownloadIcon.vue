<template>
  <div class="relative">
    <!-- 下载图标按钮 -->
    <Button
      variant="ghost"
      class="h-7 w-7 p-0 flex items-center justify-center rounded-md relative"
      @click="openDownloadDirectory"
    >
      <Icon icon="lucide:download" class="h-4 w-4" />
    </Button>
    
    <!-- 进度环 -->
    <svg
      v-if="isDownloading"
      class="absolute inset-0 h-7 w-7 pointer-events-none"
      viewBox="0 0 24 24"
    >
      <circle
        class="text-muted stroke-current opacity-20"
        cx="12"
        cy="12"
        r="10"
        fill="none"
        stroke-width="2"
      />
      <circle
        class="text-primary stroke-current"
        cx="12"
        cy="12"
        r="10"
        fill="none"
        stroke-width="2"
        :stroke-dasharray="circumference"
        :stroke-dashoffset="dashOffset"
        transform="rotate(-90 12 12)"
      />
    </svg>
    
    <!-- 下载进度提示 -->
    <!-- <div 
      v-if="isDownloading" 
      class="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs py-1 px-2 rounded whitespace-nowrap z-50"
    >
      {{ progress }}% - {{ currentFileName }}
    </div> -->
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { Icon } from '@iconify/vue'
import { Button } from '@shadcn/components/ui/button'
import { useSetupStore } from '@/stores/setup'
const { ipcRenderer } = window.electron
const setupStore = useSetupStore()

// 响应式数据
const isVisible = ref(false)
const isDownloading = ref(false)
const progress = ref(0)
const currentFileName = ref('')
const totalBytes = ref(0)
const receivedBytes = ref(0)
// 存储多个下载任务的映射
const downloads = ref(new Map())
const DOWNLOAD_EVENTS = {
  PROGRESS: 'download-progress',
  COMPLETED: 'download-completed',
  FAILED: 'download-failed',
  CANCELLED: 'download-cancelled'
}
// 圆环计算
const radius = 10
const circumference = 2 * Math.PI * radius
const dashOffset = computed(() => {
  return circumference - (progress.value / 100) * circumference
})

// 打开下载目录
const openDownloadDirectory = async () => {
  try {
    await setupStore.openDownloadDirectory()
  } catch (error) {
    console.error('Failed to open download directory:', error)
  }
}

// 监听下载进度事件
const handleDownloadProgress = (event, data) => {
  isVisible.value = true
  // 添加或更新下载任务
  downloads.value.set(data.downloadId, {
    filename: data.filename,
    progress: data.progress,
    totalBytes: data.totalBytes,
    receivedBytes: data.receivedBytes
  })
  
  // 计算总体进度
  const downloadArray = Array.from(downloads.value.values())
  const totalReceived = downloadArray.reduce((sum, download) => sum + download.receivedBytes, 0)
  const totalSize = downloadArray.reduce((sum, download) => sum + download.totalBytes, 0)
  
  isDownloading.value = true
  progress.value = totalSize > 0 ? Math.round((totalReceived / totalSize) * 100) : 0
  // 显示最新的文件名
  currentFileName.value = data.filename
  totalBytes.value = totalSize
  receivedBytes.value = totalReceived
}

// 监听下载完成事件
const handleDownloadCompleted = (event, data) => {
  // 从下载列表中移除已完成的下载
  if (data.downloadId && downloads.value.has(data.downloadId)) {
    downloads.value.delete(data.downloadId)
  } else {
    // 兼容旧版本没有downloadId的情况
    downloads.value.forEach((value, key) => {
      if (value.filename === data.filename) {
        downloads.value.delete(key)
      }
    })
  }
  
  // 检查是否还有正在进行的下载
  isDownloading.value = downloads.value.size > 0
  
  if (!isDownloading.value) {
    progress.value = 100
    currentFileName.value = data.filename
    
    // 3秒后隐藏下载图标
    setTimeout(() => {
      isVisible.value = false
    }, 3000)
  } else {
    // 如果还有其他下载，更新总体进度
    const downloadArray = Array.from(downloads.value.values())
    const totalReceived = downloadArray.reduce((sum, download) => sum + download.receivedBytes, 0)
    const totalSize = downloadArray.reduce((sum, download) => sum + download.totalBytes, 0)
    progress.value = totalSize > 0 ? Math.round((totalReceived / totalSize) * 100) : 0
    // 显示最新的文件名
    currentFileName.value = downloadArray.length > 0 ? downloadArray[downloadArray.length - 1].filename : ''
  }
}

// 监听下载取消事件
const handleDownloadCancelled = (event, data) => {
  // 从下载列表中移除已取消的下载
  if (data.downloadId && downloads.value.has(data.downloadId)) {
    downloads.value.delete(data.downloadId)
  } else {
    // 兼容旧版本没有downloadId的情况
    downloads.value.forEach((value, key) => {
      if (value.filename === data.filename) {
        downloads.value.delete(key)
      }
    })
  }
  
  // 检查是否还有正在进行的下载
  isDownloading.value = downloads.value.size > 0
  
  if (!isDownloading.value) {
    progress.value = 0
    currentFileName.value = ''
    
    // 3秒后隐藏下载图标
    setTimeout(() => {
      isVisible.value = false
    }, 3000)
  } else {
    // 如果还有其他下载，更新总体进度
    const downloadArray = Array.from(downloads.value.values())
    const totalReceived = downloadArray.reduce((sum, download) => sum + download.receivedBytes, 0)
    const totalSize = downloadArray.reduce((sum, download) => sum + download.totalBytes, 0)
    progress.value = totalSize > 0 ? Math.round((totalReceived / totalSize) * 100) : 0
    // 显示最新的文件名
    currentFileName.value = downloadArray.length > 0 ? downloadArray[downloadArray.length - 1].filename : ''
  }
}

// 监听下载失败事件
const handleDownloadFailed = (event, data) => {
  // 从下载列表中移除已失败的下载
  if (data.downloadId && downloads.value.has(data.downloadId)) {
    downloads.value.delete(data.downloadId)
  } else {
    // 兼容旧版本没有downloadId的情况
    downloads.value.forEach((value, key) => {
      if (value.filename === data.filename) {
        downloads.value.delete(key)
      }
    })
  }
  
  // 检查是否还有正在进行的下载
  isDownloading.value = downloads.value.size > 0
  
  if (!isDownloading.value) {
    progress.value = 0
    currentFileName.value = ''
    
    // 3秒后隐藏下载图标
    setTimeout(() => {
      isVisible.value = false
    }, 3000)
  } else {
    // 如果还有其他下载，更新总体进度
    const downloadArray = Array.from(downloads.value.values())
    const totalReceived = downloadArray.reduce((sum, download) => sum + download.receivedBytes, 0)
    const totalSize = downloadArray.reduce((sum, download) => sum + download.totalBytes, 0)
    progress.value = totalSize > 0 ? Math.round((totalReceived / totalSize) * 100) : 0
    // 显示最新的文件名
    currentFileName.value = downloadArray.length > 0 ? downloadArray[downloadArray.length - 1].filename : ''
  }
}

onMounted(async () => {
  // 获取下载目录配置以确定是否显示图标
  try {
    const downloadDir = await setupStore.getValue('download-directory')
    if (downloadDir) {
      isVisible.value = true
    }
  } catch (error) {
    console.error('Failed to get download directory:', error)
  }
  
  // 监听下载事件
  ipcRenderer.on(DOWNLOAD_EVENTS.PROGRESS, handleDownloadProgress)
  ipcRenderer.on(DOWNLOAD_EVENTS.COMPLETED, handleDownloadCompleted)
  ipcRenderer.on(DOWNLOAD_EVENTS.CANCELLED, handleDownloadCancelled)
  ipcRenderer.on(DOWNLOAD_EVENTS.FAILED, handleDownloadFailed)
})

onUnmounted(() => {
  // 移除事件监听
  
  ipcRenderer.removeListener(DOWNLOAD_EVENTS.PROGRESS, handleDownloadProgress)
  ipcRenderer.removeListener(DOWNLOAD_EVENTS.COMPLETED, handleDownloadCompleted)
  ipcRenderer.removeListener(DOWNLOAD_EVENTS.CANCELLED, handleDownloadCancelled)
  ipcRenderer.removeListener(DOWNLOAD_EVENTS.FAILED, handleDownloadFailed)
})
</script>