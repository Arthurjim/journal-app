<template>
    <div class="entry-list-container">
        <div class="px-2 pt-2">
            <input
                type="text"
                class="form-control"
                placeholder="Buscar entradas"
                v-model="term"
            />
        </div>
        <div class="entry-scollarea">
            <Entry v-for="entry in entriesByTerm" :key="entry.id" :entry="entry" />
        </div>
    </div>
</template>

<script>
import { defineAsyncComponent } from 'vue';
import { mapGetters } from 'vuex';

export default {
    components: {
        Entry: defineAsyncComponent(()=>import('./Entry.vue')),
    },
    computed: {
        ...mapGetters('journal',['getEntriesByTerm']),
       entriesByTerm() {
          return this.getEntriesByTerm( this.term )
        }
    },
    data(){
        return{
            term: '',
        }
    }

};
</script>

<style scoped>
input{
    height: 40px;
}
.entry-list-container {
    border-right: 1px solid #2c3e50;
    height: calc(100vh - 50px);
}
.entry-scollarea{
    height: calc(100vh - 100px);
    overflow-y: scroll;
}
</style>