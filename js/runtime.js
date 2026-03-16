// 运行时间统计
function runtime() {
  const startTime = new Date('2026-03-17 00:00:00').getTime();
  const now = new Date().getTime();
  const diff = now - startTime;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  document.getElementById('runtime').innerText = `博客已运行 ${days} 天 ${hours} 小时 ${minutes} 分钟 ${seconds} 秒`;
}

// 页面加载后立即执行一次，然后每秒更新一次
document.addEventListener('DOMContentLoaded', function() {
  runtime();
  setInterval(runtime, 1000);
});
