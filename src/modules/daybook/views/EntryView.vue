<template>
    <template v-if="entry">
        <div class="entry-title d-flex justify-content-between p-2">
            <div>
                <span class="text-success fs-3 fw-bold">{{ day }}</span>
                <span class="mx-1 fs-3">{{ month }}</span>
                <span class="mx-2 fs-4 fw-light">{{ yearDay }}</span>
            </div>
            <div>
                <input
                    type="file"
                    @change="onSelectedImage"
                    ref="imageSelector"
                    v-show="false"
                    accept="image/png, image/jpeg, image/jpg"
                />
                <button
                    class="btn btn-danger mx-2"
                    v-if="entry.id"
                    @click="onDeleteEntry"
                >
                    Borrar
                    <i class="fa fa-trash-alt"></i>
                </button>
                <button class="btn btn-primary mx-2" @click="onSelecImage">
                    Subir Foto
                    <i class="fa fa-upload"></i>
                </button>
            </div>
        </div>
        <hr />
        <div class="d-flex flex-column px-3 h-75">
            <textarea placeholder="¿Qué sucedió hoy?" v-model="entry.text">
            </textarea>
            <Fab icon="fa-save" @on-click="saveEntry" />
            <img
                :src="entry.url"
                alt="entry-pictue"
                class="img-thumbnail"
                v-if="entry.url"
            />
            <img
                :src="localImage"
                alt="entry-pictue"
                class="img-thumbnail"
                v-if="localImage && !entry.url"
            />
        </div>
    </template>
</template>

<script>
import { defineAsyncComponent } from "vue";
import { mapGetters, mapActions } from "vuex";
import Swal from "sweetalert2";
import getDayMonthYear from "../helpers/getDayMonthYear";
import { uploadImage } from "../helpers/uploadImage";
export default {
    props: {
        id: {
            type: String,
            required: true,
        },
    },
    data() {
        return {
            entry: null,
            localImage: null,
            file: null,
        };
    },
    components: {
        Fab: defineAsyncComponent(() => import("../components/Fab.vue")),
    },
    computed: {
        ...mapGetters("journal", ["getEntriesById"]),
        day() {
            const { day } = getDayMonthYear(this.entry.date);
            return day;
        },
        month() {
            const { month } = getDayMonthYear(this.entry.date);
            return month;
        },
        yearDay() {
            const { yearDay } = getDayMonthYear(this.entry.date);
            return yearDay;
        },
    },
    methods: {
        ...mapActions("journal", ["updateEntry", "createEntry", "deleteEntry"]),

        loadEntry() {
            let entry;
            if (this.id === "new") {
                entry = {
                    date: new Date().getTime(),
                    text: "",
                    url: "",
                };
            } else {
                entry = this.getEntriesById(this.id);
                if (!entry) {
                    return this.$router.push({ name: "no-entry" });
                }
            }

            this.entry = entry;
        },
        async saveEntry() {
            new Swal({
                title: "Espere por favor",
                allowOutsideClick: false,
            });
            Swal.showLoading();
            if (this.localImage) {
                this.entry.url = await uploadImage(this.file);
            }
            if (this.entry.id) {
                await this.updateEntry(this.entry);
                Swal.close();

            } else {
               await this.createEntry(this.entry);
                this.$router.push({ name: "no-entry",});
                Swal.close();
            }
            this.file = null;
            this.localImage = null;
            Swal.fire("Guardado", "Se ha guardado correctamente", "success");
        },
        async onDeleteEntry() {
            const { value: confirm } = await Swal.fire({
                title: "¿Estás seguro?",
                text: "¡No podrás revertir esto!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "¡Sí, bórralo!",
            });
            if (confirm) {
                Swal.showLoading();

                await this.deleteEntry(this.entry.id);
                this.$router.push({ name: "no-entry" });
                Swal.fire(
                    "Eliminado",
                    "Se ha eliminado correctamente",
                    "success"
                );
            }
        },
        onSelectedImage(event) {
            const file = event.target.files[0];
            if (!file) {
                this.file = null;

                return;
            }
            this.file = file;
            const fr = new FileReader();

            fr.onload = () => (this.localImage = fr.result);
            fr.readAsDataURL(file);
        },
        onSelecImage() {
            this.$refs.imageSelector.click();
        },
    },
    created() {
        this.loadEntry();
    },
    watch: {
        id(value, oldValue) {
            if (value !== oldValue) {
                this.loadEntry();
            }
        },
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
