import { MutationTree } from 'vuex';
import {
  MyMusicState,
  QUERY_MUSICS,
} from './types';

export const mutations: MutationTree<MyMusicState> = {
  [QUERY_MUSICS](state: MyMusicState, { myMusics }) {
    state.myMusics = myMusics;
  },
};
