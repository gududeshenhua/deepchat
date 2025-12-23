<template>
  <div class="w-full h-8 bg-card flex items-center gap-1 px-2 border border-border">
    <!-- Back -->
    <Button
      variant="ghost"
      class="h-7 w-7 p-0 flex items-center justify-center rounded-md"
      @click="goBack"
    >
      <Icon icon="lucide:arrow-left" class="h-4 w-4" />
    </Button>

    <!-- Forward -->
    <Button
      variant="ghost"
      class="h-7 w-7 p-0 flex items-center justify-center rounded-md"
      @click="goForward"
    >
      <Icon icon="lucide:arrow-right" class="h-4 w-4" />
    </Button>

    <!-- Refresh -->
    <Button
      variant="ghost"
      class="h-7 w-7 p-0 flex items-center justify-center rounded-md"
      @click="refresh"
    >
      <Icon icon="lucide:rotate-cw" class="h-4 w-4" />
    </Button>

    <!-- Home -->
    <Button
      variant="ghost"
      class="h-7 w-7 p-0 flex items-center justify-center rounded-md"
      @click="goHome"
    >
      <Icon icon="lucide:home" class="h-4 w-4" />
    </Button>

    <!-- Address Bar -->
    <input
      v-model="url"
      @keyup.enter="navigateToUrl"
      type="text"
      spellcheck="false"
      autocomplete="off"
      class="flex-1 h-6 bg-muted rounded-xl px-3 text-sm text-foreground/80 outline-none"
    />
    
    <!-- Star Icon for收藏 -->
    <Button
      variant="ghost"
      class="h-7 w-7 p-0 flex items-center justify-center rounded-md"
      @click="toggleCollect"
    >
      <Icon 
        :icon="isCollected ? 'lucide:star' : 'lucide:star'" 
        :class="isCollected ? 'h-4 w-4 text-blue-500' : 'h-4 w-4'"
      />
    </Button>
    
    <!-- Collect List Folder Icon -->
    <Button
      variant="ghost"
      class="h-7 w-7 p-0 flex items-center justify-center rounded-md"
      @click="showCollectListMenu"
    >
      <Icon icon="lucide:folder" class="h-4 w-4" />
    </Button>
    
    <!-- Download Icon -->
    <DownloadIcon />
  </div>
</template>

<script setup>
import { ref, onMounted, computed, nextTick } from 'vue'
import { Icon } from '@iconify/vue'
import { TAB_EVENTS } from '../lib/events'
const { ipcRenderer } = window.electron
import { useTabStore } from '@shell/stores/tab'
import { useSetupStore } from '@/stores/setup'
import { Button } from '@shadcn/components/ui/button'
import DownloadIcon from './DownloadIcon.vue'

const tabStore = useTabStore()
const setupStore = useSetupStore()

const currentTabId = computed(() => tabStore.currentTabId)
const url = ref('')
const isCollected = ref(false)
const showCollectList = ref(false)
const collectList = ref([])
const currentTabObj = ref(null)
// Function to check if current URL is in collect list
const checkIfCollected = async () => {
  if (url.value) {
    try {
      const collectList = await setupStore.getValue('collect-list')
      if (Array.isArray(collectList)) {
        isCollected.value = collectList.some(item => item.url === url.value)
      } else {
        isCollected.value = false
      }
    } catch (error) {
      console.error('Error checking if URL is collected:', error)
      isCollected.value = false
    }
  }
}

// Function to update collect list
const updateCollectList = async () => {
  try {
    const collectListData = await setupStore.getValue('collect-list')
    if (Array.isArray(collectListData)) {
      collectList.value = collectListData
    } else {
      collectList.value = []
      // Initialize with empty array if not exists
      // await setupStore.setValue('collect-list', [])
    }
  } catch (error) {
    console.error('Error getting collect list:', error)
    collectList.value = []
  }
}

const toggleCollect = async () => {
  if (!url.value) return

  // Get current tab to get title
  const currentTab = currentTabObj.value
  const title = currentTab?.title || url.value

  try {
    const collectListData = await setupStore.getValue('collect-list')
    let updatedList = Array.isArray(collectListData) ? [...collectListData] : []
    
    if (isCollected.value) {
      // Remove from collect list
      updatedList = updatedList.filter(item => item.url !== url.value)
      isCollected.value = false
    } else {
      // Check if URL already exists in the list
      const exists = updatedList.some(item => item.url === url.value)
      if (!exists) {
        // Add to collect list
        updatedList.push({ url: url.value, title })
        isCollected.value = true
      } else {
        isCollected.value = true // Already exists, so mark as collected
      }
    }
    
    // Update the collect list in the store
    await setupStore.setValue('collect-list', updatedList)
    
    // Update the collect list display
    await updateCollectList()
  } catch (error) {
    console.error('Error toggling collect:', error)
  }
}

const showCollectListMenu = async () => {
  try {
    const collectListData = await setupStore.getValue('collect-list')
    const collectList = Array.isArray(collectListData) ? collectListData : []
    
    // Call main process to show the native menu
    await ipcRenderer.invoke('presenter:call', 'setupPresenter', 'showCollectListMenu', collectList)
  } catch (error) {
    console.error('Error showing collect list menu:', error)
  }
}

const goBack = () => {
  console.log('Back clicked')
  // 这里可以调用浏览器历史回退逻辑
  tabStore.actionTab(currentTabId.value, 'goBack')
}

const goForward = () => {
  console.log('Forward clicked')
  // 这里可以调用浏览器历史前进逻辑
  tabStore.actionTab(currentTabId.value, 'goForward')
}

const refresh = () => {
  console.log('Refresh clicked')
  // 这里可以刷新当前页面
  tabStore.actionTab(currentTabId.value, 'reload')
}

const goHome = () => {
  url.value = 'home://chat'
  navigateToUrl()
}

const navigateToUrl = () => {
  console.log('Navigating to:', url.value)
  tabStore.actionTab(currentTabId.value, 'navigate', { url: url.value })
  // 这里可以做真正的跳转逻辑
}

onMounted(async () => {
  ipcRenderer.on(TAB_EVENTS.CURRENT_ACTIVE_TAB_UPDATED, (event, tab) => {
    // debugger;
    url.value = tab.originUrl
    currentTabObj.value = tab
    // Update collect status when tab changes
    nextTick(async () => {
      await checkIfCollected()
    })
  })
  
  // Handle collect item clicked from native menu
  ipcRenderer.on('collect-item-clicked', (event, urlToNavigate) => {
    url.value = urlToNavigate
    navigateToUrl()
  })
  
  // Handle collect list cleared from native menu
  // ipcRenderer.on('collect-list-cleared', async () => {
  //   isCollected.value = false
  //   await updateCollectList()
  // })
  
  // Initialize collect list
  await updateCollectList()
})
</script>
