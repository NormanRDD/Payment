<template>
  <div id="app">
    <Catalog/>
    <!-- <Description/> -->
  </div>
</template>

<script>
import Catalog from './components/catalog.vue'
// import Description from './components/description.vue'

export default {
  name: 'App',
  components: {
    Catalog,
    // Description
  }
}
</script>

<style>
*{
  scroll-behavior: smooth;
}
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');

@font-face {
    font-family: 'Gotham Pro Narrow Medium';
    src: url('fonts/GothamProNarrow-Medium.eot');
    src: url('fonts/GothamProNarrow-Medium.eot?#iefix') format('embedded-opentype'),
    url('fonts/GothamProNarrow-Medium.woff') format('woff'),
    url('fonts/GothamProNarrow-Medium.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
    }
@font-face {
    font-family: 'Gotham Pro Black';
    src: url('fonts/GothamPro-Black.eot');
    src: url('fonts/GothamPro-Black.eot?#iefix') format('embedded-opentype'),
    url('fonts/GothamPro-Black.woff') format('woff'),
    url('fonts/GothamPro-Black.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
    }
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
