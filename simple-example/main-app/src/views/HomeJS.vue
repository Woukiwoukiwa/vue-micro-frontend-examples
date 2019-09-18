<template>
  <v-micro-frontend :microFrontend="jsMicroFrontend"></v-micro-frontend>
</template>

<script>

export default {
  name: 'homeJS',
  components: {},
  data: () => {
    return {
        jsMicroFrontend: {
        name: 'js-micro-frontend',
        url: 'http://localhost:2016/js-micro-frontend.umd.js',
      }
    }
  }
}
</script>
