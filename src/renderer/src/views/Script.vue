<template>
  <div class="p-6 w-full overflow-y-auto">
    <!-- Header -->
    <div class="flex justify-between items-center mb-6">
      <!-- <h2 class="text-2xl font-bold">所有脚本扩展</h2> -->

      <Button variant="default" @click="openUpload">
        <Icon icon="material-symbols:add" class="w-5 h-5 mr-1" />
        上传脚本
      </Button>

      <input ref="fileInput" type="file" accept=".js" class="hidden" @change="onFileSelected" />
    </div>

    <!-- Script List -->
    <div>
      <draggable
        v-if="Array.isArray(scripts)"
        v-model="scripts"
        item-key="name"
        handle=".drag-handle"
        animation="200"
        class="grid grid-cols-2 md:grid-cols-2 xl:grid-cols-2 gap-4 max-w-[800px] mx-auto"
      >
        <template #item="{ element: s }">
          <div class="p-4 border rounded-xl shadow-sm bg-white">
            <!-- Header with drag handle and script name -->
            <div class="flex justify-between items-center mb-3">
              <div class="flex items-center space-x-2">
                <div class="drag-handle cursor-grab text-gray-400">
                  <Icon icon="material-symbols:drag-indicator" class="w-5 h-5" />
                </div>
                <div class="font-semibold text-base">{{ s.name }}</div>
              </div>

              <!-- Enable switch -->
              <label class="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  v-model="s.enabled"
                  @change="update(s)"
                  class="sr-only peer"
                />
                <div
                  class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"
                ></div>
              </label>
            </div>

            <!-- Script details -->
            <div class="space-y-2">
              <div class="text-xs text-gray-500">
                <span class="font-medium">匹配规则：</span>{{ s.match.join(', ') }}
              </div>

              <div class="text-xs text-gray-500">
                <span class="font-medium">入口文件：</span>{{ s.entry }}
              </div>
            </div>

            <!-- Action buttons -->
            <div class="flex justify-end space-x-2 mt-3">
              <!-- Edit -->
              <Button variant="outline" size="sm" @click="editMatch(s)">
                <Icon icon="material-symbols:edit" class="w-4 h-4 mr-1" />
                编辑规则
              </Button>

              <!-- Edit Content -->
              <Button variant="outline" size="sm" @click="editContent(s)">
                <Icon icon="material-symbols:edit-document" class="w-4 h-4 mr-1" />
                编辑内容
              </Button>

              <!-- Delete -->
              <Button variant="destructive" size="sm" @click="remove(s)">
                <Icon icon="mdi:delete-outline" class="w-4 h-4" />
              </Button>
            </div>
          </div>
        </template>
      </draggable>
    </div>

    <!-- 匹配规则编辑对话框 -->
    <Dialog :open="showMatchDialog" @update:open="showMatchDialog = $event">
      <DialogContent class="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>编辑匹配规则</DialogTitle>
          <DialogDescription>
            为脚本 "{{ scriptToEdit?.name }}" 设置匹配规则，每行一个规则 //*.example.com/*<br />
            *://github.com/*
          </DialogDescription>
        </DialogHeader>
        <div class="grid gap-4 py-4">
          <div class="grid grid-cols-4 items-center gap-4">
            <Label for="match-rules" class="text-right">匹配规则</Label>
            <Textarea
              id="match-rules"
              v-model="matchRulesText"
              class="col-span-3"
              placeholder="例如：
*://*.example.com/*
*://github.com/*
*://*.google.com/*"
              rows="6"
            />
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline" @click="cancelEditMatch">取消</Button>
          <Button @click="saveMatchRules">保存</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>

    <!-- 上传脚本匹配规则对话框 -->
    <Dialog :open="showUploadMatchDialog" @update:open="showUploadMatchDialog = $event">
      <DialogContent class="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>设置匹配规则</DialogTitle>
          <DialogDescription>
            为脚本 "{{ uploadScriptName }}" 设置匹配规则，每行一个规则（可选） //*.example.com/*<br />
            *://github.com/*
          </DialogDescription>
        </DialogHeader>
        <div class="grid gap-4 py-4">
          <div class="grid grid-cols-4 items-center gap-4">
            <Label for="upload-match-rules" class="text-right">匹配规则</Label>
            <Textarea
              id="upload-match-rules"
              v-model="uploadMatchRulesText"
              class="col-span-3"
              placeholder="例如：
                *://*.example.com/*
                *://github.com/*
                *://*.google.com/*
                留空则使用默认规则：*://*/*"
              rows="6"
            />
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline" @click="skipMatchRules">跳过</Button>
          <Button @click="confirmUploadWithMatchRules">确认</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>

    <!-- 脚本详情抽屉 -->
    <Sheet :open="showDetailSheet" @update:open="showDetailSheet = $event">
      <SheetContent class="max-w-[800px] rounded-t-lg mx-auto">
        <SheetHeader class="space-y-1">
          <SheetTitle class="text-lg">脚本详情</SheetTitle>
          <SheetDescription class="text-sm"> 查看脚本的详细内容 </SheetDescription>
        </SheetHeader>
        <div class="mt-4">
          <pre class="bg-muted/50 rounded-md p-4 text-sm overflow-auto max-h-[60vh]">{{
            currentScriptDetail
          }}</pre>
        </div>
      </SheetContent>
    </Sheet>

    <!-- 脚本内容编辑抽屉 -->
    <Sheet  :open="showEditContentDialog" @update:open="showEditContentDialog = $event">
      <SheetContent style="max-width: 100vw !important;">
        <SheetHeader>
          <SheetTitle>编辑脚本内容</SheetTitle>
          <SheetDescription>
            编辑 "{{ currentEditingScript?.name }}" 脚本的内容
          </SheetDescription>
        </SheetHeader>
        <div class="flex-1 h-[calc(100vh-160px)] mt-4" style="display: flex;align-items: center;">
          <div 
            ref="contentEditorRef"
            class="w-full h-full"
          ></div>
        </div>
        <SheetFooter class="mt-4">
          <div style="margin: 0 auto;">
            <Button style="margin-right: 10px;" variant="outline" @click="cancelEditContent">取消</Button>
            <Button @click="saveScriptContent">保存</Button>
          </div>  
        </SheetFooter>
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
import { ref, onMounted, nextTick } from 'vue'
import { Button } from '@shadcn/components/ui/button'
// import { Input } from '@shadcn/components/ui/input'
import { Label } from '@shadcn/components/ui/label'
import { Textarea } from '@shadcn/components/ui/textarea'
import {
  Sheet,
  // SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  // SheetTrigger
} from '@shadcn/components/ui/sheet'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle
} from '@shadcn/components/ui/dialog'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle
} from '@shadcn/components/ui/alert-dialog'
import { Icon } from '@iconify/vue'
import draggable from 'vuedraggable'
import { useScriptStore } from '@/stores/script'
import { toast } from '@/components/use-toast'
import { useMonaco } from 'stream-monaco'

const scriptStore = useScriptStore()

// Monaco Editor setup for script content editing
const contentEditorRef = ref<any>(null)
const { createEditor, updateCode, cleanupEditor } = useMonaco({
  themes: ['github-dark', 'github-light'],
  wordWrap: 'on',
  wrappingIndent: 'same',
  minimap: { enabled: false },
  scrollBeyondLastLine: false,
  fontSize: 14,
  lineNumbers: 'on',
  folding: true,
  automaticLayout: true,
  readOnly: false,
  MAX_HEIGHT: 'calc(100vh - 160px)'
  // height: 'calc(100vh - 160px)'
})

const scripts = ref<any>([])
const fileInput = ref<any>(null)

const showDetailSheet = ref(false)
const showDeleteDialog = ref(false)
const showMatchDialog = ref(false)
const showUploadMatchDialog = ref(false)
const showEditContentDialog = ref(false)
const currentScriptDetail = ref('')
const scriptToDelete = ref<any>(null)
const scriptToEdit = ref<any>(null)
const currentEditingScript = ref<any>(null)
const editingScriptContent = ref('')
const matchRulesText = ref('')
const uploadScriptName = ref('')
const uploadMatchRulesText = ref('')
const uploadScriptData = ref<any>(null)
let editor:any = ""
// 读取全部脚本
onMounted(async () => {
  refresh()
})

// 更新单个项目
const update = async (item) => {
  // debugger
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

  const jsText = await file.text()
  const baseName = file.name.replace(/\.js$/i, '')

  // 保存上传的脚本数据
  uploadScriptData.value = {
    jsText,
    baseName,
    fileName: file.name
  }
  uploadScriptName.value = file.name.replace('.js', '')
  uploadMatchRulesText.value = ''

  // 显示匹配规则输入对话框
  showUploadMatchDialog.value = true

  // 重置文件输入
  e.target.value = ''
}

// 确认上传脚本并设置匹配规则
const confirmUploadWithMatchRules = async () => {
  if (!uploadScriptData.value) return

  const { jsText, baseName, fileName } = uploadScriptData.value

  // 解析匹配规则
  let matchRules = ['*://*/*'] // 默认规则
  if (uploadMatchRulesText.value.trim()) {
    matchRules = uploadMatchRulesText.value
      .split('\n')
      .map((rule) => rule.trim())
      .filter((rule) => rule.length > 0)
  }

  const scriptItem = {
    name: fileName.replace('.js', ''),
    enabled: true,
    match: matchRules,
    entry: `${baseName}/index.js`
  }

  let res: any = await scriptStore.uploadScript(scriptItem, jsText)
  if (res && res.error) {
    toast({
      title: '提示',
      description: res.error,
      variant: 'destructive',
      duration: 3000
    })
  }
  scripts.value = await scriptStore.getAllScripts() // 刷新
  scriptStore.refreshWindowTabsScript()
  // 关闭对话框
  showUploadMatchDialog.value = false
  uploadScriptData.value = null
}

// 跳过匹配规则设置
const skipMatchRules = async () => {
  if (!uploadScriptData.value) return

  const { jsText, baseName, fileName } = uploadScriptData.value

  const scriptItem = {
    name: fileName.replace('.js', ''),
    enabled: true,
    match: ['*://*/*'], // 使用默认规则
    entry: `${baseName}/index.js`
  }

  let res: any = await scriptStore.uploadScript(scriptItem, jsText)
  if (res && res.error) {
    toast({
      title: '提示',
      description: res.error,
      variant: 'destructive',
      duration: 3000
    })
  }
  scripts.value = await scriptStore.getAllScripts() // 刷新
  scriptStore.refreshWindowTabsScript()
  // 关闭对话框
  showUploadMatchDialog.value = false
  uploadScriptData.value = null
}

// 编辑匹配规则
const editMatch = (script: any) => {
  scriptToEdit.value = script
  matchRulesText.value = script.match.join('\n')
  showMatchDialog.value = true
}

// 保存匹配规则
const saveMatchRules = async () => {
  if (!scriptToEdit.value) return

  // 解析匹配规则
  const matchRules = matchRulesText.value
    .split('\n')
    .map((rule) => rule.trim())
    .filter((rule) => rule.length > 0)

  if (matchRules.length === 0) {
    matchRules.push('*://*/*') // 确保至少有一个规则
  }

  // 更新脚本的匹配规则
  const updatedScript = {
    ...scriptToEdit.value,
    match: matchRules
  }

  await scriptStore.updateScript(updatedScript)
  scripts.value = await scriptStore.getAllScripts() // 刷新
  scriptStore.refreshWindowTabsScript()

  // 关闭对话框
  showMatchDialog.value = false
  scriptToEdit.value = null
  matchRulesText.value = ''
}

// 取消编辑匹配规则
const cancelEditMatch = () => {
  showMatchDialog.value = false
  scriptToEdit.value = null
  matchRulesText.value = ''
}

// 查看详情
// const showDetail = (script: any) => {
//   currentScriptDetail.value = script.content
//   showDetailSheet.value = true
// }

// 编辑脚本内容
const editContent = async (script: any) => {
  currentEditingScript.value = script
  // 从store中读取脚本内容
  try {
    const content = await scriptStore.readScriptContent(script.name)
    editingScriptContent.value = content || ''
    showEditContentDialog.value = true
    
    // 在下次 DOM 更新后初始化编辑器
    editor = null
    nextTick(async() => {
      if (!editor) {
        editor = await createEditor(
          contentEditorRef.value,
          editingScriptContent.value,
          'javascript'
        )
        requestAnimationFrame(() => {
          editor?.layout()
          editor?.revealLine(1)
        })
        // editor.revealPosition(
        //   { lineNumber: 1, column: 1 },
        //   0 // ScrollType.Smooth = 0 / Immediate = 1
        // )
        // editor.setPosition(position)
      } else {
        updateCode(editingScriptContent.value,'javascript')
      }
      
      
    })
    
  } catch (error) {
    console.error('Failed to read script content:', error)
    toast({
      title: '错误',
      description: '无法读取脚本内容',
      variant: 'destructive',
      duration: 3000
    })
  }
}

// 保存脚本内容
const saveScriptContent = async () => {
  if (!currentEditingScript.value) return

  try {
    // 从 Monaco Editor 获取当前内容updateCode() || 
    const editorValue = editor?.getValue() || editingScriptContent.value
    await scriptStore.saveScriptContent(currentEditingScript.value.name, editorValue)
    toast({
      title: '成功',
      description: '脚本内容已保存',
      variant: 'default',
      duration: 3000
    })
    showEditContentDialog.value = false
    // 清理编辑器
    cleanupEditor()
    editor = null
  } catch (error) {
    console.error('Failed to save script content:', error)
    toast({
      title: '错误',
      description: '无法保存脚本内容',
      variant: 'destructive',
      duration: 3000
    })
  }
}

// 取消编辑脚本内容
const cancelEditContent = () => {
  showEditContentDialog.value = false
  currentEditingScript.value = null
  editingScriptContent.value = ''
  // 清理编辑器
  cleanupEditor()
  editor = null
}
const remove = async (script: any) => {
  scriptToDelete.value = script
  showDeleteDialog.value = true
}

const confirmDelete = async () => {
  if (!scriptToDelete.value) return

  try {
    await scriptStore.deleteScript(scriptToDelete.value)
    scriptStore.refreshWindowTabsScript(true)
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

// 在组件卸载时清理编辑器
import { onUnmounted } from 'vue'
onUnmounted(() => {
  cleanupEditor()
})
</script>

<style>
.drag-handle:hover {
  color: #666;
}

/* Monaco Editor 样式优化 */
.monaco-editor-container {
  border-radius: 0.375rem;
  border: 1px solid hsl(var(--border));
  overflow: hidden;
}
</style>
