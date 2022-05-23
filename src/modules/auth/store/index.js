import state from './state'
import * as actions from "./actions";
import * as getters from "./getters";
import * as mutation from "./mutation";
const authModule = {
    namespaced: true,
    actions,
    getters,
    mutations: mutation,
    state
}

export default authModule