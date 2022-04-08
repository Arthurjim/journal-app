<template>
    <div class="entry-title d-flex justify-content-between p-2">
        <div>
            <span class="text-success fs-3 fw-bold">15</span>
            <span class="mx-1 fs-3">Abril</span>
            <span class="mx-2 fs-4 fw-light">Martes</span>
        </div>
        <div>
            <button class="btn btn-danger mx-2">
                Borrar
                <i class="fa fa-trash-alt"></i>
            </button>
            <button class="btn btn-primary mx-2">
                Subir Foto
                <i class="fa fa-upload"></i>
            </button>
        </div>
    </div>
    <hr />
    <div class="d-flex flex-column px-3 h-75">
        <textarea placeholder="¿Qué sucedió hoy?"></textarea>
        <Fab icon="fa-save" />
        <img
            src="https://www.batiburrillo.net/wp-content/uploads/2019/07/Ampliacio%CC%81n-de-imagen-en-li%CC%81nea-sin-perder-calidad.jpg"
            alt="entry-pictue"
            class="img-thumbnail"
        />
    </div>
</template>

<script>
import { defineAsyncComponent } from "vue";
import { mapGetters } from "vuex";
export default {
    props: {
        id: {
            type: String,
            required: true,
        },
    },
    components: {
        Fab: defineAsyncComponent(() => import("../components/Fab.vue")),
    },
    computed: {
        ...mapGetters("journal", ["getEntriesById"]),
    },
    methods: {
        loadEntry() {
            const entry = this.getEntriesById(this.id);
            console.log(entry)
        },
    },
    created() {
       this.loadEntry()
    },
};
</script>

<style lang="scss" scoped>
textarea {
    font-size: 20px;
    border: none;
    height: 100%;

    &:focus {
        outline: none;
    }
}
img {
    width: 200px;
    position: fixed;
    bottom: 150px;
    right: 20px;
    box-shadow: 0px 5px 10px rgba($color: #000000, $alpha: 0.2);
}
</style>
