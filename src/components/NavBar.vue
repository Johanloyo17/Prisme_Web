<template>
    <div class="navbar flex_y_center hover">
        <div class="navbar_brand">Prisme</div>
        <div class="navbar_items h-100 flex_y_center">
            <span class="navbar_items_item">Servicios</span>
            <span class="navbar_items_item">Proyectos</span>
            <span class="navbar_items_item">Nosotros</span>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="stylus" scoped>
    .navbar
        padding 0 15px
        background #ffffff
        display flex
        justify-content space-between
        // position: fixed;
        // top: 0;
        // width: 100%;
        // height: 7vh;
        &_brand
            font-size: 2.6em;
        &_items
            display flex
            flex 0 0 50vw
            justify-content space-around
            font-size: 1.25em;
            &_item
                height: 100%;
                align-self: center;
                display: flex;
                align-items: center;
                border-bottom: 2px transparent solid;
                transition: all .35s ease-out;
                cursor pointer
                padding: 0 10px;
                &:hover
                    border-bottom: 2px black solid;


</style>