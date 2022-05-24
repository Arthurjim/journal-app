export const loginUser =(state,{user,idToken,refreshToken})=>{
    if(idToken){
        localStorage.setItem('idToken',idToken);
        state.idToken = idToken;
    }
    if(idToken){
        localStorage.setItem('refreshToken',refreshToken);
        state.refreshToken = refreshToken;
    }
    state.user=user;
    state.status='authenticated';
}
export const logOut=(state)=>{
    state.idToken=null;
    state.refreshToken=null;
    state.user=null;
    state.status='unauthenticated';
    localStorage.removeItem('idToken');
    localStorage.removeItem('refreshToken');
}