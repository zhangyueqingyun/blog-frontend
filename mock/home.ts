import { MockMethod } from 'vite-plugin-mock';

export default [
  {
    url: '/api/blog/news',
    method: 'get',
    response: ({ query }) => {
      return {"code":20000,"message":"success","data":[{"id":0,"name":"技术","icon":null,"blogs":[{"id":0,"title":"几句话说清浏览器渲染过程","description":"Webkit 是 Safari 浏览器的内核（渲染引擎），由苹果公司开发，负责将网页数据渲染为图像。","ossPath":"几句话说清Webkit渲染过程.md","datetime":"2022-06-26T02:24:00.000Z","signs":[{"id":1,"name":"Git","icon":"yellow"}]}]},{"id":1,"name":"踩坑记录","icon":null,"blogs":[{"id":1,"title":"开启clash后，连接不上Github仓库","description":"Git 配置 Proxy 问题","ossPath":"开启clash后，连接不上Github仓库.md","datetime":"2022-06-25T02:19:48.000Z","signs":[{"id":0,"name":"Webkit","icon":"blue"}]}]},{"id":2,"name":"感悟","icon":null,"blogs":[{"id":2,"title":"菜鸟前端的五年感悟","description":"对前端的一些感悟","ossPath":"菜鸟前端的五年感悟.md","datetime":"2022-06-26T02:19:51.000Z","signs":[{"id":0,"name":"Webkit","icon":"blue"}]}]}]};
    },
  },
  {
    url: '/api/profile',
    method: 'get',
    response: ({ query }) => {
      return {"code":20000,"message":"success","data":{"id":1,"name":"张玥卿云","avatar":"https://zblog-images.oss-cn-hangzhou.aliyuncs.com/avatar.jpeg","mail":"zhangyueqingyun@foxmail.com","feeling":{"ch":"追梦,成为世界一流的程序员","en":"Chasing my dream, to be the best programmer all over the world."}}};
    },
    
  },
  {
    url: '/api/blog/0',
    method: 'get',
    response: ({ query }) => {
      return {"code":20000,"message":"success","data":{"id":0,"title":"几句话说清浏览器渲染过程","description":"Webkit 是 Safari 浏览器的内核（渲染引擎），由苹果公司开发，负责将网页数据渲染为图像。","categoryId":0,"ossPath":"几句话说清Webkit渲染过程.md","datetime":"2022-06-26T02:24:00.000Z","signIds":"1","content":"# 几句话说清 Webkit 渲染过程\r\n \r\n## Webkit 是什么？\r\nWebkit 是 Safari 浏览器的内核（渲染引擎），由苹果公司开发，负责将网页数据渲染为图像。 常见的渲染引擎还有 Chrome 的 Blink、 Firefox 的 Gecko、IE的 Trident，和 Opera 的 Presto。\r\n\r\n## Webkit 如何展示 HTML 和 CSS ?\r\n\r\n网页内容在未被内核渲染前，是由 HTML 和 CSS 表示的。 Webkit 会先将 HTML 和 CSS 转换为内部数据结构，再将内部数据结构转换为显示系统所需要的数据，利用计算机显示系统供我们浏览。\r\n\r\n负责转换 HTML 的解释器将 HTML 构建为 DOM 树。负责转换 CSS 解释器将 CSS 解释为内部样式规则的集合。\r\n\r\nWebkit 根据 DOM 树和 CSS 规则集合构建了 RenderObject 树，并递归遍历该树计算每个可视节点的布局和样式。为简化渲染逻辑，Webkit 又基于 RenderObject 树构建了 RenderLayer 树，每个 RenderLayer 节点对应图像中的一个层，每个层包含了网页中的一些可视元素（RenderObject子树）。浏览器会分别绘制每个层，最后将所有层进行合成。\r\n\r\n随后，Webkit 会利用软件渲染、硬件渲染、和混合渲染三种方式的其中一种，将 RenderLayer 的各个层合利用 CPU 和 GPU 成最终结果，显示在屏幕显示器中。\r\n\r\n## 总结\r\nWebkit 将 HTML 和 CSS 转化为内部数据结构 DOM 树和样式规则集合，利用  DOM 树和样式规则集合构建 RenderObject 树，并进行排版布局计算。为了简化渲染逻辑，又从 RenderObject 树派生了 RenderLayer 树将图像分层， 并通过显示系统将 RenderLayer 树的层级合成，并渲染在了屏幕上，让我们可以方便的浏览各种各样的信息。\r\n\r\n\r\n\r\n\r\n"}};
    },
  },
  {
    url: '/api/blog/1',
    method: 'get',
    response: ({ query }) => {
      return {"code":20000,"message":"success","data":{"id":1,"title":"开启clash后，连接不上Github仓库","description":"Git 配置 Proxy 问题","categoryId":1,"ossPath":"开启clash后，连接不上Github仓库.md","datetime":"2022-06-25T02:19:48.000Z","signIds":"0","content":"# 开启 Clash 后连接不上Git仓库\r\n\r\n解决方案：配置 Git 的 http 代理\r\n\r\n~~~\r\n/**\r\n    端口号改为自己的端口号\r\n */\r\ngit config --global http.proxy http://localhost:1080\r\n~~~"}};
    },
  },
  {
    url: '/api/blog/2',
    method: 'get',
    response: ({ query }) => {
      return {"code":20000,"message":"success","data":{"id":2,"title":"菜鸟前端的五年感悟","description":"对前端的一些感悟","categoryId":2,"ossPath":"菜鸟前端的五年感悟.md","datetime":"2022-06-26T02:19:51.000Z","signIds":"0","content":"# 菜鸟前端的五年感悟\r\n\r\n这五年，我经历过小型互联网公司，也经历过稍具规模的互联网公司。对不同公司的价值，有了 一些切实的感悟：\r\n\r\n### 如何衡量一个技术团队？\r\n衡量技术团队，永远离不开公司的业务。从以下四个维度可以看出一个技术团队是否优秀：\r\n1. 技术团队需要支持的业务具有多大价值？\r\n2. 技术团队能在多大程度上支撑公司业务的需求？\r\n3. 在技术的范畴内，它如何为公司带来利润（利用技术降本提效等）？\r\n4. 技术团队为整个技术行业做出了多大贡献？\r\n\r\n(一天思考一些，明日追更)\r\n"}};
    },
  }
] as MockMethod[];