<template>
   <div class="error-container">
        <div class="emoji animation">😕</div>
        <div class="error-code">404</div>
        <h1 class="error-title">页面未找到</h1>
        <p class="error-message">
            抱歉，您访问的页面不存在或已被移动。<br>
            请检查URL是否正确，或返回首页继续浏览。
        </p>
        <!-- <div class="action-buttons">
            <button class="btn btn-primary" onclick="goBack()">返回上一页</button>
            <button class="btn btn-secondary" onclick="goHome()">返回首页</button>
        </div> -->
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
 * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            /* background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); */
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            /* color: white; */
        }
        
        .error-container {
            text-align: center;
            margin:auto;
            padding: 40px;
            background: rgba(255, 255, 255, 0.1);
            border-radius: 20px;
            backdrop-filter: blur(10px);
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
            max-width: 500px;
            width: 90%;
        }
        
        .error-code {
            font-size: 120px;
            font-weight: bold;
            margin-bottom: 20px;
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
        }
        
        .error-title {
            font-size: 32px;
            margin-bottom: 20px;
            font-weight: 300;
        }
        
        .error-message {
            font-size: 18px;
            margin-bottom: 30px;
            line-height: 1.6;
            opacity: 0.9;
        }
        
        .action-buttons {
            display: flex;
            gap: 15px;
            justify-content: center;
            flex-wrap: wrap;
        }
        
        .btn {
            padding: 12px 24px;
            border: none;
            border-radius: 25px;
            font-size: 16px;
            font-weight: 500;
            cursor: pointer;
            transition: all 0.3s ease;
            text-decoration: none;
            display: inline-block;
        }
        
        .btn-primary {
            /* background: #fff; */
            color: #667eea;
        }
        
        .btn-secondary {
            background: transparent;
            /* color: white; */
            border: 2px solid rgba(255, 255, 255, 0.5);
        }
        
        .btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        }
        
        .btn-primary:hover {
            background: #f8f9fa;
        }
        
        .btn-secondary:hover {
            background: rgba(255, 255, 255, 0.1);
            border-color: rgba(255, 255, 255, 0.8);
        }
        
        .animation {
            animation: float 3s ease-in-out infinite;
        }
        
        @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
        }
        
        .emoji {
            font-size: 80px;
            margin-bottom: 20px;
            display: block;
        }
</style>