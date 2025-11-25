console.log("脚本已运行：导出新闻");

function injectButton() {
  if (window.__EXPORT_NEWS_BTN__) return;
  window.__EXPORT_NEWS_BTN__ = true;

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
  btn.onclick = () => alert("准备开始导出！");

  document.body.appendChild(btn);
}

injectButton();
