<template>
    <div class="entry-list-container">
        <div class="px-2 pt-2">
            <input
                type="text"
                class="form-control"
                placeholder="Buscar entradas"
            />
        </div>
        <div class="entry-scollarea">
            <Entry v-for="item in 20" :key="item" />
        </div>
    </div>
</template>

<script>
import { defineAsyncComponent } from 'vue';
export default {
    components: {
        Entry: defineAsyncComponent(()=>import('./Entry.vue')),
    },

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