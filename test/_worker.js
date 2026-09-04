// _worker.js
// 这是 Cloudflare Pages 的 Worker 入口文件

export default {
  async fetch(request) {
    // 先测试能不能跑通
    return new Response('✅ Worker 部署成功！', {
      headers: { 'Content-Type': 'text/plain' }
    });
  }
};
