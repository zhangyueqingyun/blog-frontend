import { MockMethod } from 'vite-plugin-mock';

export default [ { 
  url: '/api/blog/path/:id',
  method: 'get',
  response: () => {
    return {"code":20000,"message":"请求成功","data":[{"id":0,"type":"category","name":"大前端"},{"id":6,"type":"blog","name":"几句话说清Webkit渲染过程.md"}]};  
  }},
  {
    url: '/api/blog/:id',
    method: 'get',
    response: ({ query }) => {
      return {"code":20000,"message":"请求成功","data":{"id":6,"title":"几句话说清Webkit渲染过程.md","description":"描述","ossPath":"几句话说清Webkit渲染过程.md","datetime":"2021-12-31T16:00:00.000Z","signIds":"1,0","categoryId":0,"content":"# 几句话说清 Webkit 渲染过程\r\n \r\n## Webkit 是什么？\r\nWebkit 是 Safari 浏览器的内核（渲染引擎），由苹果公司开发，负责将网页数据渲染为图像。 常见的渲染引擎还有 Chrome 的 Blink、 Firefox 的 Gecko、IE的 Trident，和 Opera 的 Presto。\r\n\r\n## Webkit 如何展示 HTML 和 CSS ?\r\n\r\n网页内容在未被内核渲染前，是由 HTML 和 CSS 表示的。 Webkit 会先将 HTML 和 CSS 转换为内部数据结构，再将内部数据结构转换为显示系统所需要的数据，利用计算机显示系统供我们浏览。\r\n\r\n负责转换 HTML 的解释器将 HTML 构建为 DOM 树。负责转换 CSS 解释器将 CSS 解释为内部样式规则的集合。\r\n\r\nWebkit 根据 DOM 树和 CSS 规则集合构建了 RenderObject 树，并递归遍历该树计算每个可视节点的布局和样式。为简化渲染逻辑，Webkit 又基于 RenderObject 树构建了 RenderLayer 树，每个 RenderLayer 节点对应图像中的一个层，每个层包含了网页中的一些可视元素（RenderObject子树）。浏览器会分别绘制每个层，最后将所有层进行合成。\r\n\r\n随后，Webkit 会利用软件渲染、硬件渲染、和混合渲染三种方式的其中一种，将 RenderLayer 的各个层合利用 CPU 和 GPU 成最终结果，显示在屏幕显示器中。\r\n\r\n## 总结\r\nWebkit 将 HTML 和 CSS 转化为内部数据结构 DOM 树和样式规则集合，利用  DOM 树和样式规则集合构建 RenderObject 树，并进行排版布局计算。为了简化渲染逻辑，又从 RenderObject 树派生了 RenderLayer 树将图像分层， 并通过显示系统将 RenderLayer 树的层级合成，并渲染在了屏幕上，让我们可以方便的浏览各种各样的信息。\r\n\r\n\r\n\r\n\r\n"}};
    },
  }
] as MockMethod[];