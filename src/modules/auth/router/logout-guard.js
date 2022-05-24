import store from '@/store'
const isLogoutGuard=async(to,from, next)=>{
    const {ok} = await store.dispatch('auth/checkAuthentication')

    if(ok){
        next({name:'daybook'})
    }else{
        next()
    }
}
export default isLogoutGuard;