<template>
    <div class="entry-container mb-3 pointer p-2">
        <div class="entry-title d-flex ">
            <span class="text-succes fs-5 fw-bold">04</span>
            <span class="mx-1 fs-5">Abril</span>
            <span class="mx-5 fw-light">2022, dLunes</span>
        </div>
        <div class="entry-description">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo voluptatibus ipsum consequuntur commodi aliquid quibusdam eaque excepturi, quidem sunt, aliquam rerum neque eligendi quod delectus doloribus exercitationem nam repudiandae omnis.
        </div>
    </div>
</template>

<style lang="scss" scoped>
.entry-container{
    border-bottom: 1px solid #2c3e50;
    transition: all .3s ease;
    &:hover{
        background-color: #2c3e50;
        /* background-color: lighten($color: rgb(32, 31, 31), $amount: 45); */
        color: #fff;
    }
    .entry-description{
        font-size: 12px;
    }
}
</style>