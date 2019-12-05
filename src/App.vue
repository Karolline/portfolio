<template>
  <div id="app">
    <app-header />
    <spy-scroll />
    <router-view />
  </div>
</template>

<script>
import AppHeader from './components/AppHeader'
import SpyScroll from '@/components/SpyScroll'

export default {
  name: 'app',
  components: {
    AppHeader, SpyScroll
  }
}
</script>

<style src="@/assets/css/style.css">
</style>