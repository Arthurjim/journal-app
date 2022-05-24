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