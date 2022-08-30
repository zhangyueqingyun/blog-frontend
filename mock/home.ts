import { MockMethod } from 'vite-plugin-mock';

export default [
  {
    url: '/api/navigation',
    method: 'get',
    response: () => ({"code":20000,"message":"请求成功","data":[{"id":0,"name":"大前端"},{"id":1,"name":"计算机"},{"id":2,"name":"系统设计"},{"id":3,"name":"项目管理"},{"id":4,"name":"学习日记"}]})
  },
  {
    url: '/api/news',
    method: 'get',
    response: ({ query }) => {
      return {"code":20000,"message":"请求成功","data":[{"id":0,"name":"大前端","parentId":-1,"blogs":[{"id":6,"title":"几句话说清Webkit渲染过程.md","description":"描述","ossPath":"几句话说清Webkit渲染过程.md","datetime":"2021-12-31T16:00:00.000Z","signIds":"1,0","categoryId":0}]},{"id":1,"name":"计算机","parentId":-1,"blogs":[{"id":7,"title":"开启clash后，连接不上Github仓库.md","description":"描述","ossPath":"开启clash后，连接不上Github仓库.md","datetime":"2021-12-31T16:00:00.000Z","signIds":"1,0","categoryId":1},{"id":8,"title":"菜鸟前端的五年感悟.md","description":"描述","ossPath":"菜鸟前端的五年感悟.md","datetime":"2021-12-31T16:00:00.000Z","signIds":"1,0","categoryId":1}]}]};
    },
  },
  {
    url: '/api/profile',
    method: 'get',
    response: ({ query }) => {
      return {"code":20000,"message":"success","data": {"id":1,"name":"张玥卿云","avatar":"https://zblog-images.oss-cn-hangzhou.aliyuncs.com/avatar.jpeg","mail":"zhangyueqingyun@foxmail.com","feeling":{"ch":"追梦,成为世界一流的程序员","en":"Chasing my dream, to be the best programmer all over the world."}}};
    },
    
  }
] as MockMethod[];