<template>
  <v-micro-frontend :microFrontend="jsMicroFrontend"></v-micro-frontend>
</template>

<script>

export default {
  name: 'homeTS',
  components: {},
  data: () => {
    return {
        jsMicroFrontend: {
        name: 'ts-micro-frontend',
        url: 'http://localhost:2017/ts-micro-frontend.umd.js',
      }
    }
  }
}
</script>
