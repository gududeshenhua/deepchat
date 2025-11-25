<template>
     <div class="container">
        <div class="card">
            <h2>ISC信息</h2>
            <label for="isc-username">账号：</label>
            <input type="text" id="isc-username" name="isc-username" placeholder="请输入账号">
            <label for="isc-password">密码：</label>
            <input type="password" id="isc-password" name="isc-password" placeholder="请输入密码">
        </div>
        <div class="card">
            <h2>下载设置</h2>
            <label for="download-directory">默认下载目录：</label>
            <div class="directory-selector">
                <input type="text" id="download-directory" class="directory-input" name="download-directory" placeholder="请选择默认下载目录" readonly>
                <button class="select-button" onclick="selectDirectory()">选择目录</button>
            </div>

            <div class="checkbox-container">
                <input type="checkbox" id="prompt-save-dialog" name="prompt-save-dialog">
                <label for="prompt-save-dialog">文件下载时是否显示文件保存对话框</label>
            </div>


        </div>
    </div>
</template>

<script>
export default {

}
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
        max-width: 1000px;
        margin-top: 20px;
        background-color: #fff;
        border-radius: 8px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
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

    .card input[type="text"],
    .card input[type="password"],
    .card select {
        width: 100%;
        padding: 8px;
        margin-bottom: 15px;
        border: 1px solid #ccc;
        border-radius: 4px;
        box-sizing: border-box;
    }

    .checkbox-container {
        display: flex;
        align-items: center;
        margin-bottom: 20px;
    }

    .checkbox-container label {
        margin-bottom: 0;
    }

    .checkbox-item {
        display: flex;
        align-items: center;
        width: 300px;
    }

    .card input[type="checkbox"] {
        margin-right: 10px;
    }

    .save-button {
        width: 100%;
        padding: 12px;
        background-color: #4CAF50;
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

    /* 新增的目录选择容器样式 - 修正对齐问题 */
    .directory-selector {
        display: flex;
        margin-bottom: 15px;
    }

    .directory-input {
        flex: 1;
        padding: 8px;
        border: 1px solid #ccc;
        border-radius: 4px 0 0 4px;
        border-right: none;
        height: 36px;
        box-sizing: border-box;
    }

    .select-button {
        padding: 0 12px;
        background-color: #2196F3;
        color: white;
        border: none;
        border-radius: 0 4px 4px 0;
        cursor: pointer;
        white-space: nowrap;
        height: 36px;
        display: flex;
        align-items: center;
    }

    .select-button:hover {
        background-color: #0b7dda;
    }

</style>