export default {
    getUser (state) {
      return state.user
    },
    getToken(state) {
      return state.token
    },
    getName(state){
      return (state.user && state.user.name)? state.user.name : '';
    }
  }
  