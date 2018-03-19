<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <FooterGuide></FooterGuide>
  </div>
</template>

<script>
  import FooterGuide from './components/FooterGuide/FooterGuide.vue'
export default {
  components:{
    FooterGuide
  },

}
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
