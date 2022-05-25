import journalApi from "@/api/journalApi";
export const loadEntries = async ({ commit,rootState }) => {
    const uuid = rootState.auth.localId;
    const { data } = await journalApi.get(`${uuid}/entries.json`);
    const entries = [];
    if (!data) {
        commit("setEntries", []);
        return;
    }
    for (let id of Object.keys(data)) {
        entries.push({
            id,
            ...data[id],
        });
    }
    commit("setEntries", entries);
};

export const updateEntry = async ({ commit,rootState }, entry) => {
    const uuid = rootState.auth.localId;
    const entryData = Object.assign({}, entry);
    delete entryData.id;
    await journalApi.put(`${uuid}/entries/${entry.id}.json`, entryData);
    commit("updateEntry", { ...entry });
};
export const createEntry = async ({ commit,rootState }, entry ) => {
    const uuid = rootState.auth.localId;
    const { data } = await journalApi.post(`${uuid}/entries.json`, entry);

    const newEntry = {
        id: data.name,
        ...entry,
    };
    commit("addEntry", newEntry);
    return data.name;
};

export const deleteEntry = async ({ commit,rootState }, id) => {
    const uuid = rootState.auth.localId;
    await journalApi.delete(`${uuid}/entries/${id}.json`, id);
    commit("deleteEntry", id);
};
