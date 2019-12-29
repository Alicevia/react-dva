import dva from 'dva';
import './index.css';
import {createBrowserHistory,createHashHistory,createMemoryHistory} from 'history';

// 1. Initialize
const app = dva({
  initialState:{
    products:[
      {name:'dva',id:1,key:1},
      {name:'antd',id:2,key:2},
    ]
  },
  history: createMemoryHistory(),//history路由

});

// 2. Plugins
// app.use({});

// 3. Model
app.model(require('./models/products').default);
// require('./models').default.forEach(key=>app.model(key.default))

// 4. Router  require这种形式导入 是个对象{default：value}
app.router(require('./router').default);


// 5. Start 获取根元素
app.start('#root');
