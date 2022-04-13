// export const myMutation = (state)=>{
// }

export const setEntries = (state,entries)=>{
    state.entries = [...state.entries, ...entries]
    state.isLoading = false
}

export const updateEntry = (state,entry)=>{
    state.entries = state.entries.map(item =>entry.id === item.id ? entry : item)
}
export const addEntry = (state,entry)=>{
    state.entries = [...state.entries, entry]

}