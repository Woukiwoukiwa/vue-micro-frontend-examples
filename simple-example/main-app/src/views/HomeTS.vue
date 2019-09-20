<template>
  <v-micro-frontend :microFrontend="tsMicroFrontend" :props="mydata"></v-micro-frontend>
</template>

<script>

export default {
  name: 'homeTS',
  components: {},
  data: () => {
    return {
      tsMicroFrontend: {
        name: 'ts-micro-frontend',
        url: 'http://localhost:2017/ts-micro-frontend.umd.js',
      },
      mydata: {
        message: 'Hey, I am a message',
      }
    }
  }
}
</script>
