<template>
  <div class="w-screen h-screen flex" :class="isWinMacOS ? '' : 'bg-background'">

    <!-- 左侧菜单 -->
    <MenuBar />
    <!-- 右侧内容部分 -->
    <div class="flex-1 flex flex-col">
      <AppBar />
      <BrowserAddressBar />
      <main class="content-container">
        <!-- WebContentsView will be rendered here by the main process -->
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import AppBar from './components/AppBar.vue'
import BrowserAddressBar from './components/BrowserAddressBar.vue'
import MenuBar from './components/Menu.vue'
import { useDeviceVersion } from '@/composables/useDeviceVersion'

// Detect platform to apply proper styling
const { isWinMacOS } = useDeviceVersion()
</script>

<style>
html,
body {
  background-color: transparent;
}
</style>
