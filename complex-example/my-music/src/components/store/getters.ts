import { GetterTree } from 'vuex';
import {
  MyMusicState,
  Music,
} from './types';

export const getters: GetterTree<MyMusicState, {}> = {

  musics(state: MyMusicState): Music[] {
    return state.myMusics.sort((a, b) => {
      return ('' + a.name).localeCompare(b.name);
    });
  },
};
