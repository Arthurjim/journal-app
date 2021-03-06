import authApi from "@/api/authApi";
/* eslint-disable */
export const createUser = async({commit},user)=>{
    const {name, email, password} = user;
    try {
        const {data} = await authApi.post(':signUp',{email, password, returnSecureToken: true});
        const {idToken,refreshToken}=data;
        //Se actualiza el nombre del usuario
        await authApi.post(':update',{displayName:name, idToken});
        delete user.password;
        // TODO Mutation: loginUser
        commit('loginUser',{user, idToken,refreshToken});
        return {ok:true}
    } catch (error) {
       
        return {ok:false,message:error.response.data.error.message}
    }
}
export const loginUser = async({commit},user)=>{
    const {email, password} = user;
    try {
        const {data} = await authApi.post(':signInWithPassword',{email, password, returnSecureToken: true});
        const {displayName,idToken,localId,refreshToken}=data;

        user.name = displayName;
        delete user.password;
        commit('loginUser',{user,localId, idToken,refreshToken});

        return {ok:true}
    } catch (error) {
        return {ok:false,message:error.response.data.error.message}
    }
}

export const checkAuthentication = async ({commit})=>{
    const idToken = localStorage.getItem('idToken');
    const refreshToken = localStorage.getItem('refreshToken');
    if(!idToken){
        commit('logOut')
        return {ok:false, message: 'No hay token'}
    }
    try {
        const {data} = await authApi.post(':lookup',{idToken});
        const {displayName,email,localId}=data.users[0];
        const user ={
            name:displayName,
            email
        }
        commit('loginUser',{user, localId,idToken,refreshToken});

        return {ok:true}
        
    } catch (error) {
        commit('logOut')
        return {ok:false,message:error.response.data.error.message}
    }
}
export const logoutUser = async ({commit})=>{
    commit('logOut')
    return {ok:true}

}