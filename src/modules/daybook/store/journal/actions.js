// export const myAction = async({commit})=>{

import journalApi from "@/api/journalApi";

// }

export const loadEntries = async (/*{commit}*/) => {
    console.log("loadEntries");
    const { data } = await journalApi.get("/entries.json");
    console.log(data);
};

export const updateEntry = async (/*{commit}*/) => {};

export const createEntry = async (/*{commit}*/) => {};
