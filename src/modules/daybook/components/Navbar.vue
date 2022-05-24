<template>
    <nav class="navbar bg-primary">
        <a class="navbar-brand text-white">
            <img
                src="@/assets/logo.png"
                alt="vue logo"
                class="d-inline-block align-text-top mx-2"
                height="24"
            />
            {{userName ? userName : 'Daybook'}}
        </a>
        <div class="d-flex">
            <button @click="logOut" class="btn btn-outline-info mx-2">
                <i class="fa fa-sign-out-alt"></i>
            </button>
        </div>
    </nav>
</template>

<script>
import { useRouter } from 'vue-router';
import useAuth from '../../auth/composables/useAuth'

export default{

    setup(){
        const {logoutUser,userName}=useAuth();
        const router = useRouter()
        return{
            userName,
            logOut:async()=>{
                await logoutUser()
                router.push({name:'login'})
            }
        }
    }
}
</script>
