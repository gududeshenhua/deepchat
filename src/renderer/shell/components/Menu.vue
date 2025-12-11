<template>
  <aside class="w-16 bg-[#e1f7f6] h-full flex flex-col overflow-hidden border-r border-border">
    <!-- 顶部头像区域 -->
    <div class="w-full h-16 flex items-center justify-center">
      <div class="w-8 h-8 rounded-full bg-[#00a8a8] flex items-center justify-center">
        <Icon icon="mdi:account" class="text-white text-2xl" />
      </div>
    </div>

    <!-- 菜单滚动区 -->
    <div class="flex-1 overflow-y-auto scroll-thin-custom">
      <nav class="flex flex-col items-center space-y-3 px-2">
        <div
          v-for="item in menus"
          :key="item.label"
          @click="navigateToUrl(item)"
          class="w-full h-14 cursor-pointer flex flex-col items-center justify-center rounded-xl transition-all"
          :class="active === item.url ? 'bg-white shadow-sm' : 'hover:bg-white/60'"
        >
          <Icon :icon="item.icon" class="text-[#00a8a8] text-2xl" />
          <span
            class="text-xs mt-1"
            :class="active === item.url ? 'text-[#00a8a8]' : 'text-[#4a7977]'"
          >
            {{ item.label }}
          </span>
        </div>
      </nav>
    </div>
  </aside>
</template>
<script setup>
import { Icon } from '@iconify/vue'
import { ref, computed, onMounted } from 'vue'
import { useTabStore } from '@shell/stores/tab'
import { useSetupStore } from '@/stores/setup'

const { ipcRenderer } = window.electron
import { TAB_EVENTS } from '../lib/events'

const tabStore = useTabStore()
const setupStore = useSetupStore()
const currentTabId = computed(() => tabStore.currentTabId)

// 默认菜单数据
const defaultMenus = [
  { label: '首页', icon: 'mdi:home-outline', url: 'home://chat' },
  { label: '应用', icon: 'mdi:view-grid-outline', url: 'local://page/tabTest.html' },
  { label: '数据', icon: 'mdi:chart-bar', url: 'local://page/sqliteTest.html' },
  { label: '工具', icon: 'mdi:briefcase-outline', url: 'local://page/hideWebTest.html' },
  { label: '消息', icon: 'mdi:message-processing-outline', url: 'local://page/loggerTest.html' },
  { label: '设置', icon: 'mdi:cog-outline', url: 'home://setup' },
  { label: '脚本', icon: 'mdi:script-text-outline', url: 'home://script' }
]

// 从 setupStore 获取菜单数据
const menus = ref(defaultMenus)

// 初始化菜单数据
const initMenus = async () => {
  try {
    const menuList = await setupStore.getValue('menu-list')
    if (Array.isArray(menuList) && menuList.length > 0) {
      menus.value = menuList.filter(item => item.visible !== false)
    } else {
      // 如果没有菜单数据，则使用默认数据并保存
      await setupStore.setValue('menu-list', defaultMenus)
    }
  } catch (error) {
    console.error('Failed to load menu list:', error)
    menus.value = defaultMenus
  }
}

const active = ref('首页')

const navigateToUrl = (item) => {
  active.value = item.url
  // debugger
  // window.location.href = item.url
  tabStore.actionTab(currentTabId.value, 'navigate', { url: item.url })
  // 这里可以做真正的跳转逻辑
}

onMounted(async () => {
  // 初始化菜单数据
  await initMenus()
  
  ipcRenderer.on(TAB_EVENTS.CURRENT_ACTIVE_TAB_UPDATED, (event, tab) => {
    // debugger;
    console.log('currentMunu', tab)
    active.value = tab.originUrl
  })
})
</script>

<style scoped>
.scroll-thin-custom::-webkit-scrollbar {
  width: 4px; /* 改成你想要的宽度，比默认 thin 更细 */
}

.scroll-thin-custom::-webkit-scrollbar-thumb {
  background-color: #ccc;
  border-radius: 9999px;
}

.scroll-thin-custom::-webkit-scrollbar-thumb:hover {
  background-color: #aaa;
}

.scroll-thin-custom::-webkit-scrollbar-track {
  background: transparent;
}
</style>
