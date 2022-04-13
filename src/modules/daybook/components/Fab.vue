<template>
    <button @click="$emit('on-click')" class="btn btn-primary">
        <i v-bind:class="'fa fa-1x '+ icon"></i>
    </button>
</template>

<script>
export default {
    props:{
        icon: {
            type: String,
            default: "fa-plus",

        }
    },
    // methods:{
    //     clickF(){
    //         this.$emit('on-click', this.icon);
    //     }
    // }

}
</script>

<style lag="scss" scoped>
    button{
        border-radius:100%;
        bottom: 20px;
        height:60px;
        position: fixed;
        right: 20px;
        width:60px;
    }
</style>