// export const myGetter = (state)=>{
    // return state
// }


export const getEntriesByTerm = (state)=>(term='')=>{
    console.log(term)
    if(term.length===0) return state.entries
    return state.entries.filter(entry => entry.text.toLowerCase().includes(term.toLowerCase()))
}

export const getEntriesById = (state)=>(id='')=>{
    const entry =  state.entries.find(entry => entry.id === id)
    if(!entry) return undefined
    return {...entry} // TODO se mutael estado 

}

export const crreateEntry = (/*state*/)=>{
    // return state
}