<template>
  <div>
    <!-- <div class="exoBase"> -->
      <section class="bodyHome">
        <section class="portade">
          <NavBar/> <!-- navbar Component -->           
          
          <div class="portade_mask-b">
          </div>
          <div class="portade_mask-w ">
          
          </div>
        </section>
        <!-- SERVICIOS -->
        <section class="sect_service">
          <Services/> <!-- Services Component -->
        </section>
      </section>
    <!-- </div> -->
  </div>
</template>

<script>
import NavBar from '../components/NavBar'
import Services from '../components/Services'

export default {
  components: {
    NavBar: NavBar,
    Services: Services,
  },
}
</script>


<style lang="stylus">
  @font-face {
    font-family: bebas;
    src: url(../assets/BebasNeue-Regular.ttf);
    src: url(../assets/BebasNeue-Regular.otf);
  }
  @font-face {
    font-family: sf;
    src: url(../assets/SFProDisplay-Regular.ttf);
    
  }
  body
    font-family sf
  .exoBase
    min-height 100vh
    display grid
    background-color lighten(grey, 40%)
    grid-template-rows: 8vh auto;
    grid-template-columns: 100%;
  .bodyHome
    width: 100%;
    overflow: hidden;
  // portade GRID section
  .portade
    height 100vh
    position relative
    z-index 2
    display: grid;
    grid-template-rows: 10vh auto;
    grid-template-columns: 60% 40%;
    &_mask
      &-b
        background-color black
        z-index -1
        height 100%
        width 60vw
      &-w
        background-color white
        z-index -1
        height 100%
        width 40vw
  .sect_service
    height 100vh 
    background-color red
</style>