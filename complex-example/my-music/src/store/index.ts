import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import { module as mymusic } from '@/components/store';

Vue.use(Vuex);

const store: StoreOptions<{}> = {
  state: {
    version: '1.0.0',
  },
  modules: {
    mymusic,
  },
};

export default new Vuex.Store<{}>(store);
