<template>
  <aside
    class="w-16 bg-[#e1f7f6] h-full flex flex-col overflow-hidden border-r border-border"
  >
    <!-- 顶部头像区域 -->
    <div class="w-full h-16 flex items-center justify-center">
      <div class="w-8 h-8 rounded-full bg-[#00a8a8] flex items-center justify-center">
        <Icon icon="mdi:account" class="text-white text-2xl" />
      </div>
    </div>

    <!-- 菜单滚动区 -->
    <div class="flex-1 overflow-y-auto scrollbar-thin scrollbar-track-transparent scrollbar-thumb-gray-300 hover:scrollbar-thumb-gray-400">
      <nav class="flex flex-col items-center space-y-3 px-2">
        <div
          v-for="item in menus"
          :key="item.label"
          @click="navigateToUrl(item.url)"
          class="w-full h-14 cursor-pointer flex flex-col items-center justify-center rounded-xl transition-all"
          :class="active === item.label
            ? 'bg-white shadow-sm'
            : 'hover:bg-white/60'"
        >
          <Icon
            :icon="item.icon"
            class="text-[#00a8a8] text-2xl"
          />
          <span
            class="text-xs mt-1"
            :class="active === item.label ? 'text-[#00a8a8]' : 'text-[#4a7977]'"
          >
            {{ item.label }}
          </span>
        </div>
      </nav>
    </div>
  </aside>
</template>
<script setup >
import { Icon } from "@iconify/vue";
import { ref,computed } from "vue";
import { useTabStore } from '@shell/stores/tab'

const tabStore = useTabStore()
const currentTabId = computed(() => tabStore.currentTabId)

const menus = [
  { label: "首页", icon: "mdi:home-outline" , url: "local://chat" },
  { label: "应用", icon: "mdi:view-grid-outline" , url: "local://page/test1.html" },
  { label: "数据", icon: "mdi:chart-bar" ,url: "local://page/test2.html" },
  { label: "工具", icon: "mdi:briefcase-outline",url: "local://page/test3.html"  },
  { label: "消息", icon: "mdi:message-processing-outline",url: "local://page/test1.html"  },
  { label: "设置", icon: "mdi:cog-outline",url: "local://page/test2.html" },
];

const active = ref("首页");

const navigateToUrl = (url) => {
  tabStore.actionTab(currentTabId.value, 'navigate', { url: url })
  // 这里可以做真正的跳转逻辑
};
</script>


<style scoped>
</style>