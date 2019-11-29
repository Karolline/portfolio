<template>
  <div id="app">
    바뀐거 맞나요..
    <router-link to="/portfolio/test">클릭</router-link>
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'app'
}
</script>