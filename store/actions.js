export default {
    async GET_USERLIST({commit}){
      const userList = await this.$axios.$post('/pro/showUserByCompany')
      commit('SET_USERLIST',userList.data.array)
    }
  }
  