import { computed } from "vue"

const { useStore } = require("vuex")

const useAuth=()=>{
    const store = useStore()
    const createUser = async(user)=>{
        const resp = await store.dispatch('auth/createUser',user)
        return resp
    }
    const loginUser = async(user)=>{
        const resp = await store.dispatch('auth/loginUser',user)
        return resp
    }
    const checkAuthStatus = async ()=>{
        const resp = await store.dispatch('auth/checkAuthentication')
        
        return resp
    }
    const logoutUser = async ()=>{
       const resp = await store.dispatch('auth/logoutUser')
            return resp

    }

    return {
        checkAuthStatus,
        createUser,
        loginUser,
        logoutUser,
        authStatus:computed(()=>store.getters['auth/currentState']),
        userName:computed(()=>store.getters['auth/username'])
    }
}
export default useAuth