
export default {

  namespace: 'example',

  state: {},

  subscriptions: { //这里面的函数在系统启动的时候会被执行一次 只有一次
    setup({ dispatch, history }) {  // eslint-disable-line
//监听 history.listen(()=>{}) 
    },
  },

  effects: {// 触发action的时候 如果 reducer和effect中名称一样 那么reducer中的先执行
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
      yield put({ type: 'save' });
    },
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },

};
