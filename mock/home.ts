import { MockMethod } from 'vite-plugin-mock';

export default [
  {
    url: '/api/news',
    method: 'get',
    response: ({ query }) => {
      return {"code":20000,"message":"success","data":[{"id":0,"name":"技术","icon":null,"blogs":[{"id":0,"title":"几句话说清浏览器渲染过程","description":"Webkit 是 Safari 浏览器的内核（渲染引擎），由苹果公司开发，负责将网页数据渲染为图像。","content":null,"datetime":"2022-06-26T02:24:00.000Z","signs":[{"id":1,"name":"Git","icon":"yellow"}]},{"id":3,"title":"网络安全","description":"网络安全的简介","content":null,"datetime":"2022-05-31T02:30:50.000Z","signs":[{"id":1,"name":"Git","icon":"yellow"}]}]},{"id":1,"name":"踩坑记录","icon":null,"blogs":[{"id":1,"title":"开启clash后，连接不上Github仓库","description":"Git 配置 Proxy 问题","content":"2","datetime":"2022-06-25T02:19:48.000Z","signs":[{"id":0,"name":"Webkit","icon":"blue"}]}]},{"id":2,"name":"感悟","icon":null,"blogs":[{"id":2,"title":"菜鸟前端的五年感悟","description":"对前端的一些感悟","content":"2","datetime":"2022-06-26T02:19:51.000Z","signs":[{"id":0,"name":"Webkit","icon":"blue"}]}]}]};
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
    url: '/api/blog',
    method: 'get',
    response: ({ query }) => {
      return {"code":20000,"message":"success","data": {
        id: 0,
        title: '几句话说清浏览器的渲染过程',
        description: '描述',
        date: '2022/06/49',
        md: "# 几句话说清浏览器的渲染过程"
      }};
    },
  }
] as MockMethod[];