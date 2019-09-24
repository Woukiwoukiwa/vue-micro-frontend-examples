<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>VUE-MICRO-FRONTEND</span>
        <span class="font-weight-light">MyMusic</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        text
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
      >
        <span class="mr-2">Latest Release</span>
      </v-btn>
    </v-app-bar>

    <v-content>
      <MyMusic/>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import MyMusic from './components/MyMusic.vue';

export default Vue.extend({
  name: 'App',
  components: {
    MyMusic,
  },
  data: () => ({
    //
  }),
});
</script>
