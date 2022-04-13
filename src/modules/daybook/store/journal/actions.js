
import journalApi from "@/api/journalApi";


export const loadEntries = async ({commit}) => {
    const { data } = await journalApi.get("/entries.json");
    const entries = [];
    for(let id of Object.keys(data)) {
        entries.push({
            id,
            ...data[id]
        });
    }
    commit('setEntries', entries);
};

export const updateEntry = async ({commit},entry) => {
    
    const entryData = Object.assign({},entry)
    delete entryData.id;
    console.log(entry.id)
    const {data} = await journalApi.put(
        `/entries/${entry.id}.json`, entryData);
        console.log(data)
    if(data){
        commit('updateEntry', entry);
    }
   
};

export const createEntry = async (/*{commit}*/) => {};
