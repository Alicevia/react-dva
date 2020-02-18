export default {
  namespace:'products',
  state:[],
  // state:{ 类似vuex中的state
  //   number:0,
  // },
  reducers:{//最后会变成reducer函数
    'delete'(state,{payload:id}){
      return state.filter(item=>item.id!==id)
    }
  }
}

