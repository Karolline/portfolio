<template>
  <div id="app">
    <app-header />
    <router-view />
  </div>
</template>

<script>
import AppHeader from './components/AppHeader'
export default {
  name: 'app',
  components: {
    AppHeader
  },
  created () {
    // window.addEventListener("hashchange", function() { scrollBy(0, -60) });
  }
}
</script>

<style src="@/assets/css/style.css">
</style>