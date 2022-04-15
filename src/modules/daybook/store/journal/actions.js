import journalApi from "@/api/journalApi";

export const loadEntries = async ({ commit }) => {
    const { data } = await journalApi.get("/entries.json");
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

export const updateEntry = async ({ commit }, entry) => {
    const entryData = Object.assign({}, entry);
    delete entryData.id;
    await journalApi.put(`/entries/${entry.id}.json`, entryData);
    commit("updateEntry", { ...entry });
};

export const createEntry = async ({ commit }, entry) => {
    const { data } = await journalApi.post("/entries.json", entry);
    const newEntry = {
        id: data.name,
        ...entry,
    };
    commit("addEntry", newEntry);
    return data.name;
};

export const deleteEntry = async ({ commit }, id) => {
    await journalApi.delete(`/entries/${id}.json`, id);
    commit("deleteEntry", id);
};
