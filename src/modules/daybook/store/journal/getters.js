// export const myGetter = (state)=>{
    // return state
// }


export const getEntriesByTerm = (state)=>(term='')=>{
    console.log(term)
    if(term.length===0) return state.entries
    return state.entries.filter(entry => entry.text.toLowerCase().includes(term.toLowerCase()))
}

export const getEntriesById = (/*state*/)=>{
    // return state
}

export const crreateEntry = (/*state*/)=>{
    // return state
}