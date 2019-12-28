export default{
  setUsers:(state,payload)=>{
     state.users.username = payload.username
     state.users.password = payload.password
  },
}
