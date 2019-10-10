<template>
  <div class="exoBase">
    <NavBar/>
    <section class="bodyHome">
      <section class="portade">
        <h1>Lorem, ipsum dolor.</h1>
      </section>
    </section>
  </div>
</template>

<script>
import NavBar from '../components/NavBar'
export default {
  components: {
    NavBar: NavBar
  },
}
</script>


<style lang="stylus">
  @font-face {
    font-family: bebas;
    src: url(../assets/BebasNeue-Regular.ttf);
    src: url(../assets/BebasNeue-Regular.otf);
  }
  body
    font-family bebas
  .exoBase
    min-height 100vh
    display grid
    background-color lighten(grey, 40%)
    grid-template-rows: 7vh auto;
  .portade
    height 100vh

</style>