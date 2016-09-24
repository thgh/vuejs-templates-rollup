<template>
  <div id="app">
    <h1>\{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Hello Vue!'
    }
  }
}
</script>

<style>
html, body {
  min-height: 100%;
}
body {
  background: #fff url(https://upload.wikimedia.org/wikipedia/commons/5/53/Vue.js_Logo.svg) no-repeat center;
  background-size: contain;
  font-family: Helvetica, sans-serif;
  text-align: center;
}
</style>
