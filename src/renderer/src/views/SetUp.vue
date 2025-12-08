<template>
  <div class="w-full overflow-y-auto">
  <div class="container">
    <div class="card">
      <h2>ISC信息</h2>
      <div class="input-group">
        <label for="isc-username">账号：</label>
        <div class="input-with-save">
          <input
            type="text"
            id="isc-username"
            name="isc-username"
            placeholder="请输入账号"
            v-model="iscUsername"
            @input="onInputChange('iscUsername')"
          />
          <button
            v-if="changedFields.iscUsername"
            class="save-button-small"
            @click="saveField('iscUsername', iscUsername)"
          >
            保存
          </button>
        </div>
      </div>
      <div class="input-group">
        <label for="isc-password">密码：</label>
        <div class="input-with-save">
          <input
            type="password"
            id="isc-password"
            name="isc-password"
            placeholder="请输入密码"
            v-model="iscPassword"
            @input="onInputChange('iscPassword')"
          />
          <button
            v-if="changedFields.iscPassword"
            class="save-button-small"
            @click="saveField('iscPassword', iscPassword)"
          >
            保存
          </button>
        </div>
      </div>
    </div>
    <div class="card">
      <h2>下载设置</h2>
      <div class="input-group">
        <label for="download-directory">默认下载目录：</label>
        <div class="directory-selector">
          <input
            type="text"
            id="download-directory"
            class="directory-input"
            name="download-directory"
            placeholder="请选择默认下载目录"
            readonly
            v-model="downloadDirectory"
            @input="onInputChange('downloadDirectory')"
          />
          <button class="select-button" @click="selectDirectory">选择目录</button>
          <button
            v-if="changedFields.downloadDirectory"
            class="save-button-small"
            @click="saveField('downloadDirectory', downloadDirectory)"
          >
            保存
          </button>
        </div>
      </div>

      <div class="input-group">
        <div class="checkbox-container">
          <input
            type="checkbox"
            id="prompt-save-dialog"
            name="prompt-save-dialog"
            v-model="promptSaveDialog"
            @change="onInputChange('promptSaveDialog')"
          />
          <label for="prompt-save-dialog">文件下载时是否显示文件保存对话框</label>
          <button
            v-if="changedFields.promptSaveDialog"
            class="save-button-small"
            @click="saveField('promptSaveDialog', promptSaveDialog)"
          >
            保存
          </button>
        </div>
      </div>

      <!-- Not Show Modal List Section -->
      <div class="input-group">
        <label>静默文件列表：</label>
        <div class="array-items-container">
          <div 
            v-for="(item, index) in notShowModalList" 
            :key="index" 
            class="array-item"
          >
            <span class="array-item-tag">
              {{ item }}
              <button 
                class="remove-button"
                @click="removeArrayItem('notShowModalList', index)"
              >
                ×
              </button>
            </span>
          </div>
         
        </div>
         <div class="array-actions">
            <input
              type="text"
              v-model="newNotShowModalItem"
              placeholder="输入文件名称"
              class="new-item-input"
            />
            <button 
              class="add-button"
              @click="addArrayItem('notShowModalList', newNotShowModalItem)"
              :disabled="!newNotShowModalItem.trim()"
            >
              添加
            </button>
            <button
              v-if="changedFields.notShowModalList"
              class="save-button-small"
              @click="saveField('notShowModalList', notShowModalList)"
            >
              保存
            </button>
          </div>
      </div>
    </div>
  </div>
  </div>  
</template>

<script setup lang="ts">
import { ref, onMounted, reactive } from 'vue'
import { useSetupStore } from '@/stores/setup'

const setupStore = useSetupStore()

// 响应式数据
const iscUsername = ref('')
const iscPassword = ref('')
const downloadDirectory = ref('')
const promptSaveDialog = ref(false)
const notShowModalList = ref<string[]>([])
const newNotShowModalItem = ref('')

// 跟踪已修改的字段
const changedFields = reactive({
  iscUsername: false,
  iscPassword: false,
  downloadDirectory: false,
  promptSaveDialog: false,
  notShowModalList: false
})

// 字段配置映射
const fieldConfig = {
  iscUsername: 'isc-username',
  iscPassword: 'isc-password',
  downloadDirectory: 'download-directory',
  promptSaveDialog: 'prompt-save-dialog',
  notShowModalList: 'not-show-modal-list'
}

// 输入变化处理
const onInputChange = (fieldName: keyof typeof changedFields) => {
  changedFields[fieldName] = true
}

// // 数组项变化处理
// const onArrayItemChange = (fieldName: keyof typeof changedFields) => {
//   changedFields[fieldName] = true
// }

// 保存单个字段
const saveField = async (fieldName: keyof typeof changedFields, value: any) => {
  try {
    const configKey = fieldConfig[fieldName]
    await setupStore.setValue(configKey, value)
    changedFields[fieldName] = false
    console.log(`字段 ${fieldName} 保存成功`)
  } catch (error) {
    console.error(`保存字段 ${fieldName} 失败:`, error)
  }
}

// 添加数组项
const addArrayItem = async (fieldName: keyof typeof changedFields, newItem: string) => {
  if (!newItem.trim()) return
  
  try {
    // 添加到前端数组
    if (fieldName === 'notShowModalList') {
      notShowModalList.value.push(newItem)
      newNotShowModalItem.value = '' // 清空输入框
      changedFields[fieldName] = true
    }
  } catch (error) {
    console.error(`添加数组项失败:`, error)
  }
}

// 删除数组项
const removeArrayItem = async (fieldName: keyof typeof changedFields, index: number) => {
  try {
    // 从前端数组中删除
    if (fieldName === 'notShowModalList') {
      notShowModalList.value.splice(index, 1)
      changedFields[fieldName] = true
    }
  } catch (error) {
    console.error(`删除数组项失败:`, error)
  }
}

// 选择目录
const selectDirectory = async () => {
  try {
    // 调用setup store中的真实目录选择方法
    const selectedPath = await setupStore.selectDownloadDirectory()
    if (selectedPath) {
      downloadDirectory.value = selectedPath
      changedFields.downloadDirectory = true
      console.log('选择的目录:', selectedPath)
    }
  } catch (error) {
    console.error('选择目录失败:', error)
  }
}

// 初始化数据
const initData = async () => {
  try {
    // 从store中加载数据
    await setupStore.syncFromMain()

    // 设置默认值
    iscUsername.value = (await setupStore.getValue(fieldConfig.iscUsername)) || ''
    iscPassword.value = (await setupStore.getValue(fieldConfig.iscPassword)) || ''
    downloadDirectory.value = (await setupStore.getValue(fieldConfig.downloadDirectory)) || ''
    promptSaveDialog.value = (await setupStore.getValue(fieldConfig.promptSaveDialog)) || false
    
    // 加载数组字段
    const modalList = await setupStore.getValue(fieldConfig.notShowModalList) || []
    notShowModalList.value = Array.isArray(modalList) ? modalList : []

    // 重置修改状态
    Object.keys(changedFields).forEach((key) => {
      changedFields[key as keyof typeof changedFields] = false
    })

    console.log('初始化数据完成')
  } catch (error) {
    console.error('初始化数据失败:', error)
  }
}

// 组件挂载时初始化数据
onMounted(() => {
  initData()
})
</script>

<style scoped>
/* body {
        font-family: Arial, sans-serif;
        margin: 0;
        padding: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: #f5f5f5;
    } */

.container {
  width: 80%;
  /* margin: 0 auto; */
  max-width: 1000px;
  margin-top: 20px;
  background-color: #fff;
  border-radius: 8px;
  /* box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); */
  overflow: hidden;
}

.card {
  padding: 20px;
  border-bottom: 1px solid #ddd;
}

.card:last-child {
  border-bottom: none;
}

.card h2 {
  margin-top: 0;
  margin-bottom: 10px;
  color: #333;
}

.card label {
  display: block;
  margin-bottom: 5px;
  color: #666;
}

.input-group {
  margin-bottom: 20px;
}

.input-group label {
  display: block;
  margin-bottom: 5px;
  color: #666;
  font-weight: 500;
}

.input-with-save {
  display: flex;
  align-items: center;
  gap: 8px;
}

.card input[type='text'],
.card input[type='password'],
.card select {
  flex: 1;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  min-height: 36px;
}

.checkbox-container {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 20px;
}

.checkbox-container label {
  margin-bottom: 0;
  flex: 1;
}

.checkbox-item {
  display: flex;
  align-items: center;
  width: 300px;
}

.card input[type='checkbox'] {
  margin-right: 10px;
}

.save-button {
  width: 100%;
  padding: 12px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 10px;
}

.save-button:hover {
  background-color: #45a049;
}

.save-button-small {
  padding: 6px 12px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 12px;
  white-space: nowrap;
  height: 36px;
  transition: background-color 0.2s;
}

.save-button-small:hover {
  background-color: #45a049;
}

.save-button-small:disabled {
  background-color: #cccccc;
  cursor: not-allowed;
}

/* 新增的目录选择容器样式 - 修正对齐问题 */
.directory-selector {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 15px;
}

.directory-input {
  flex: 1;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  height: 36px;
  box-sizing: border-box;
  background-color: #f9f9f9;
}.select-button {
  padding: 0 12px;
  background-color: #2196f3;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  white-space: nowrap;
  height: 36px;
  display: flex;
  align-items: center;
  transition: background-color 0.2s;
}

.select-button:hover {
  background-color: #0b7dda;
}

/* Array field styles */
.array-items-container {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 10px;
}

.array-item {
  display: inline-flex;
  align-items: center;
}

.array-item-tag {
  padding: 4px 24px 4px 8px;
  background-color: #ecf5ff;
  border: 1px solid #d9ecff;
  border-radius: 4px;
  box-sizing: border-box;
  display: inline-flex;
  align-items: center;
  font-size: 12px;
  color: #409eff;
  height: 24px;
  position: relative;
}

.remove-button {
  padding: 0;
  background-color: transparent;
  color: #409eff;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  font-size: 14px;
  width: 14px;
  height: 14px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 4px;
  top: 50%;
  transform: translateY(-50%);
  transition: all 0.2s;
}

.remove-button:hover {
  background-color: rgba(0, 0, 0, 0.1);
  color: #f44336;
}

.array-actions {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 10px;
}

.new-item-input {
  flex: 1;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  min-height: 36px;
}

.add-button {
  padding: 6px 12px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 12px;
  white-space: nowrap;
  height: 36px;
  transition: background-color 0.2s;
}

.add-button:hover {
  background-color: #45a049;
}

.add-button:disabled {
  background-color: #cccccc;
  cursor: not-allowed;
}
</style>
