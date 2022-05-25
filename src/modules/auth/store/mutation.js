export const loginUser =(state,{user,idToken,localId,refreshToken})=>{
    if(idToken){
        localStorage.setItem('idToken',idToken);
        state.idToken = idToken;
    }
    if(idToken){
        localStorage.setItem('refreshToken',refreshToken);
        state.refreshToken = refreshToken;
    }
    state.user=user;
    state.localId = localId;
    state.status='authenticated';
}
export const logOut=(state)=>{
    state.idToken=null;
    state.refreshToken=null;
    state.user=null;
    state.localId = null;

    state.status='unauthenticated';
    localStorage.removeItem('idToken');
    localStorage.removeItem('refreshToken');
}