<template>
  <v-micro-frontend :microFrontend="myMusicMicroFrontend"></v-micro-frontend>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component({})
export default class MyMusicView extends Vue {

  private myMusicMicroFrontend = {
    name: 'my-music',
    url: '/micro-frontend/my-music',
  };
}
</script>
