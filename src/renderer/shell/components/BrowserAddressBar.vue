<template>
  <div
    class="w-full h-8 bg-card flex items-center gap-1 px-2 border border-border rounded-lg"
  >
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
  </div>
</template>

<script setup>
import { ref,onMounted,computed } from "vue";
import { Icon } from "@iconify/vue";
import { TAB_EVENTS } from '../lib/events'
const { ipcRenderer } = window.electron
import { useTabStore } from '@shell/stores/tab'
import { Button } from '@shadcn/components/ui/button'

const tabStore = useTabStore()

const currentTabId = computed(() => tabStore.currentTabId)
const url = ref("");

const goBack = () => {
  console.log("Back clicked");
  // 这里可以调用浏览器历史回退逻辑
  tabStore.actionTab(currentTabId.value, 'goBack')
};

const goForward = () => {
  console.log("Forward clicked");
  // 这里可以调用浏览器历史前进逻辑
  tabStore.actionTab(currentTabId.value, 'goForward')
};

const refresh = () => {
  console.log("Refresh clicked");
  // 这里可以刷新当前页面
  tabStore.actionTab(currentTabId.value, 'reload')
};

const goHome = () => {
  url.value = "local://chat";
  navigateToUrl();
};

const navigateToUrl = () => {
  console.log("Navigating to:", url.value);
  tabStore.actionTab(currentTabId.value, 'navigate', { url: url.value })
  // 这里可以做真正的跳转逻辑
};

onMounted(()=>{
  ipcRenderer.on(TAB_EVENTS.CURRENT_ACTIVE_TAB_UPDATED, (event, tab) => {
    // debugger;
    url.value = tab.url
  })
})
</script>
