# HTTP API 服务文档

HTTP API 服务允许外部应用程序调用本应用中的管理器方法。

## 服务地址

- 服务地址：`http://localhost:9000`
- 默认端口：9000（可在代码中修改）

## API 端点

### 1. 调用方法端点
- **URL**: `/api/call`
- **方法**: `POST`
- **内容类型**: `application/json`
- **描述**: 调用指定的Presenter方法

**请求体格式**:
```json
{
  "presenterName": "setupPresenter",
  "methodName": "getValue",
  "args": ["my-key"]
}
```

**响应格式**:
```json
{
  "success": true,
  "result": "value-from-getValue",
  "request": {
    "presenterName": "setupPresenter",
    "methodName": "getValue",
    "args": ["my-key"]
  }
}
```

**错误响应**:
```json
{
  "success": false,
  "error": "错误信息"
}
```

### 2. 服务状态端点
- **URL**: `/api/status`
- **方法**: `GET`
- **描述**: 获取HTTP API服务的状态信息

**响应格式**:
```json
{
  "status": "running",
  "port": 9000,
  "uptime": 123.45,
  "timestamp": 1234567890123
}
```

## 使用示例

### 使用 curl 调用方法
```bash
curl -X POST http://localhost:9000/api/call \
  -H "Content-Type: application/json" \
  -d '{
    "presenterName": "setupPresenter",
    "methodName": "getValue",
    "args": ["download-directory"]
  }'
```

### 使用 JavaScript/Node.js 调用方法
```javascript
const callPresenterMethod = async (presenterName, methodName, args = []) => {
  const response = await fetch('http://localhost:9000/api/call', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      presenterName,
      methodName,
      args
    })
  });
  
  return await response.json();
};

// 调用示例
const result = await callPresenterMethod('setupPresenter', 'getValue', ['my-key']);
console.log(result);
```

## 可用的 Presenter 和方法

以下是在主进程中可用的 Presenter，可以通过 HTTP API 调用它们的方法：

- `setupPresenter` - 配置数据管理
  - `getValue(key)` - 获取值
  - `setValue(key, value)` - 设置值
  - `deleteValue(key)` - 删除值
  - `hasKey(key)` - 检查键是否存在
  - `getAllKeys()` - 获取所有键
  - `getAllValues()` - 获取所有键值对

- `hideWebConPresenter` - 隐藏WebContents管理
  - `createHiddenWebContents(options)` - 创建隐藏的WebContents
  - `closeHiddenWebContents(id)` - 关闭隐藏的WebContents
  - `getHiddenWebContents(id)` - 获取隐藏的WebContents
  - `executeJavaScript(id, script)` - 在WebContents中执行JavaScript

- `tabPresenter` - 标签页管理
  - `createTab(options)` - 创建标签页
  - `closeTab(tabId)` - 关闭标签页
  - `getTab(tabId)` - 获取标签页信息

- `windowPresenter` - 窗口管理
  - `createWindow(options)` - 创建窗口
  - `getWindow(windowId)` - 获取窗口信息

- 以及其他在 `Presenter` 类中定义的所有 Presenter

## 安全注意事项

1. HTTP API 服务目前仅绑定到 localhost (127.0.0.1)，以防止外部网络访问
2. 服务没有身份验证机制，仅应在受信任的环境中使用
3. 请确保在生产环境中适当配置安全措施