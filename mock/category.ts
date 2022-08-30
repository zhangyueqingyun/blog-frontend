import { MockMethod } from 'vite-plugin-mock';

export default [ { 
  url: '/api/category/path/:id',
  method: 'get',
  response: () => {
    return {"code":20000,"message":"请求成功","data":[{"id":0,"type":"category","name":"大前端"}]};  
  }},
  {
    url: '/api/category/:id',
    method: 'get',
    response: ({ query }) => {
      return {"code":20000,"message":"请求成功","data":[{"id":5,"type":"category","name":"基础"},{"id":6,"type":"category","name":"应用"},{"type":"blog","name":"几句话说清Webkit渲染过程.md","id":6,"title":"几句话说清Webkit渲染过程.md","description":"描述","ossPath":"几句话说清Webkit渲染过程.md","datetime":"2021-12-31T16:00:00.000Z","signIds":"1,0","categoryId":0}]};
    },
  }
] as MockMethod[];