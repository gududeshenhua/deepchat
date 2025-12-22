console.log("脚本已运行：导出新闻1111");
// console.log(window);
function loadScript(src) {
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => resolve();
    script.onerror = err => reject(err);
    document.head.appendChild(script);
  });
}
async function injectButton() {
  // if (window.__EXPORT_NEWS_BTN__) return;
  // window.__EXPORT_NEWS_BTN__ = true;
  // console.log("开始加载 persenterFactory.js");
  // await loadScript("local://page/common/persenterFactory.js");
  // console.log("persenterFactory.js 加载完成");

  // await loadScript("local://page/common/hideWebCon.js");
  // console.log("hideWebCon.js 加载完成");
  // console.log(globalThis)
  console.log(window)
  // console.log(window.api.copyText("55555"))
  // console.log(window.HiddenWebContentsManager.getAllHiddenWebContents())
  console.log(window.PresenterFactory) 
  console.log(window.HiddenWebContentsManager)
  let data = await window.HiddenWebContentsManager.getAllHiddenWebContents();
  console.log("所有隐藏的WebContents数据:", data);
  console.log(document.body)
  console.log("------------------------wtf")
  // console.log(data);
  const btn = document.createElement("button");
  btn.innerText = "导出新闻";
  btn.style.cssText = `
    padding: 6px 10px;
    position: fixed;
    top: 20px;
    right: 20px;
    background: #008cff;
    color: #fff;
    border-radius: 6px;
    z-index: 999999;
  `;
  btn.onclick = () => alert("准备开始导出123！");

  document.body.appendChild(btn);
}
// document.addEventListener("DOMContentLoaded", ()=>{
//   console.log("DOMContentLoaded 事件触发");
//   injectButton();
// });
injectButton();
