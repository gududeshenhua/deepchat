<template>
  <div class="p-6 w-full overflow-y-auto">
    <!-- Header -->
    <div class="flex justify-between items-center mb-6">
      <!-- <h2 class="text-2xl font-bold">所有脚本扩展</h2> -->

      <Button @click="openUpload">
        <Icon icon="material-symbols:add" class="w-5 h-5 mr-1" />
        上传脚本
      </Button>

      <input
        ref="fileInput"
        type="file"
        accept=".js"
        class="hidden"
        @change="onFileSelected"
      />
    </div>

    <!-- Script List -->
    <draggable
      v-if="Array.isArray(scripts)"
      v-model="scripts"
      item-key="name"
      handle=".drag-handle"
      animation="200"
    >
      <template #item="{ element: s }">
        <div
          class="mb-4 p-4 border rounded-xl shadow-sm bg-white flex justify-between items-center"
        >
          <!-- Left side -->
          <div class="flex items-center space-x-3">
            <div class="drag-handle cursor-grab text-gray-400">
              <Icon icon="material-symbols:drag-indicator" class="w-6 h-6" />
            </div>

            <div>
              <div class="font-semibold text-base">{{ s.name }}</div>
              <div class="text-xs text-gray-500">{{ s.match.join(", ") }}</div>

              <!-- Entry -->
              <div class="text-[11px] text-gray-400 mt-1">
                {{ s.entry }}
              </div>
            </div>
          </div>

          <!-- Right side -->
          <div class="flex items-center space-x-3">
            <!-- Enable switch -->
            <label class="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                v-model="s.enabled"
                @change="update(s)"
              />
              <span class="text-sm">启用</span>
            </label>

            <!-- Details -->
            <Button variant="secondary" @click="showDetail(s)">
              <Icon icon="material-symbols:info-outline" class="w-4 h-4" />
              详情
            </Button>

            <!-- Delete -->
            <Button variant="destructive" @click="remove(s)">
              <Icon icon="material-symbols:delete-outline" class="w-4 h-4" />
            </Button>
          </div>
        </div>
      </template>
    </draggable>
    
    <!-- 脚本详情抽屉 -->
    <Sheet :open="showDetailSheet" @update:open="showDetailSheet = $event">
      <SheetContent class="max-w-[800px] rounded-t-lg mx-auto">
        <SheetHeader class="space-y-1">
          <SheetTitle class="text-lg">脚本详情</SheetTitle>
          <SheetDescription class="text-sm">
            查看脚本的详细内容
          </SheetDescription>
        </SheetHeader>
        <div class="mt-4">
          <pre class="bg-muted/50 rounded-md p-4 text-sm overflow-auto max-h-[60vh]">{{ currentScriptDetail }}</pre>
        </div>
      </SheetContent>
    </Sheet>

    <!-- 删除确认对话框 -->
    <AlertDialog :open="showDeleteDialog" @update:open="showDeleteDialog = $event">
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>确认删除</AlertDialogTitle>
          <AlertDialogDescription>
            确定要删除脚本 "{{ scriptToDelete?.name }}" 吗？此操作不可撤销。
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel @click="cancelDelete">取消</AlertDialogCancel>
          <AlertDialogAction @click="confirmDelete">确认删除</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue"
import { Button } from "@shadcn/components/ui/button"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@shadcn/components/ui/alert-dialog'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from '@shadcn/components/ui/sheet'
import { Icon } from "@iconify/vue"
import draggable from "vuedraggable"
import { useScriptStore } from "@/stores/script"

const scriptStore = useScriptStore()

const scripts = ref<any>([])
const fileInput = ref<any>(null)

const showDetailSheet = ref(false)
const showDeleteDialog = ref(false)
const currentScriptDetail = ref('')
const scriptToDelete = ref<any>(null)
// 读取全部脚本
onMounted(async () => {
 refresh()
})

// 更新单个项目
const update = async (item) => {
  await scriptStore.updateScript(item)
  scripts.value = await scriptStore.getAllScripts() // 刷新
  scriptStore.refreshWindowTabsScript()
}
const refresh = async () => {
   scripts.value = await scriptStore.getAllScripts()
}

// 上传脚本
const openUpload = () => fileInput.value.click()

const onFileSelected = async (e) => {
  const file = e.target.files[0]
  if (!file) return
  // debugger
  const jsText = await file.text()
  const baseName = file.name.replace(/\.js$/i, "")

  const scriptItem = {
    name: file.name.replace(".js", ""),
    enabled: true,
    match: ["*://*/*"],
    entry: `${baseName}/index.js`,
  }

  await scriptStore.uploadScript(scriptItem, jsText)

  scripts.value = await scriptStore.getAllScripts() // 刷新
}

// 查看详情
const showDetail = (script: any) => {
  currentScriptDetail.value = script.content
  showDetailSheet.value = true
}

// 删除
const remove = async (script: any) => {
  scriptToDelete.value = script
  showDeleteDialog.value = true
}

const confirmDelete = async () => {
  if (!scriptToDelete.value) return

  try {
    await scriptStore.deleteScript(scriptToDelete.value)
    await refresh()
    showDeleteDialog.value = false
    scriptToDelete.value = null
  } catch (error) {
    console.error('Failed to delete script:', error)
  }
}

const cancelDelete = () => {
  showDeleteDialog.value = false
  scriptToDelete.value = null
}

</script>

<style>
.drag-handle:hover {
  color: #666;
}
</style>
