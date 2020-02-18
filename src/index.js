import dva from 'dva';
import {createBrowserHistory,createHashHistory,createMemoryHistory} from 'history';

// 1. Initialize
const app = dva({
  initialState:{//初始化某个model中的值
    products:[
      {name:'dva',id:1,key:1},
      {name:'antd',id:2,key:2},
    ]
  },
  history: createHashHistory(),//history路由

});

// 2. Plugins
// app.use({});

// 3. Model
app.model(require('./models/products').default);
// require('./models').default.forEach(key=>app.model(key.default))
// 你也可以创建多个modle

// 4. Router  require这种形式导入 是个对象{default：value} 
app.router(require('./router').default);


// 5. Start 获取根元素
app.start('#root');
