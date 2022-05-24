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
        const {displayName,idToken,refreshToken}=data;
        user.name = displayName;
        delete user.password;
        commit('loginUser',{user, idToken,refreshToken});

        return {ok:true}
    } catch (error) {
        return {ok:false,message:error.response.data.error.message}
    }
}