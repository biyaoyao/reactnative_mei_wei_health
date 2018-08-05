/**
 * Created by BIYY on 2018-6-8.
 */
let callback = ()=>{
  console.log('callback');
};
export default {
  login(state, action) {
    state.login = action.payload;
    state.callback = action.callback||callback;
    return state;
  },
  user(state, action) {
    state.user = action.payload;
    state.callback = action.callback||callback;
    return state;
  },
  token(state, action) {
    state.token = action.payload;
    state.callback = action.callback||callback;
    return state;
  },
  theme(state, action) {
    state.theme = action.payload;
    state.callback = action.callback||callback;
    return state;
  }
};

