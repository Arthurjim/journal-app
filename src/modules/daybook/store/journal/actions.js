import journalApi from "@/api/journalApi";

export const loadEntries = async ({ commit }) => {
    const { data } = await journalApi.get("/entries.json");
    const entries = [];
    for (let id of Object.keys(data)) {
        entries.push({
            id,
            ...data[id],
        });
    }
    commit("setEntries", entries);
};

export const updateEntry = async ({ commit }, entry) => {
    const entryData = Object.assign({}, entry);
    delete entryData.id;
    await journalApi.put(
        `/entries/${entry.id}.json`,
        entryData
    );
    commit("updateEntry", { ...entry });
};

export const createEntry = async ({commit},entry) => {
   const {data} =  await journalApi.post('/entries.json',entry)
    const newEntry = {
        id: data.name,
        ...entry
    }
    commit("addEntry",newEntry)
    return  data.name
};
