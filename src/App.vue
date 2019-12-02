<template>
  <div id="app">
    <app-header />
    <router-view />
    <div style="height:1000px"></div>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader'
export default {
  name: 'app',
  components: {
    AppHeader
  }
}
</script>

<style src="@/assets/css/style.css">
</style>