import { ActionTree } from 'vuex';
import axios from 'axios';
import {
  MyMusicState,
  QUERY_MUSICS,
} from './types';


export const actions: ActionTree<MyMusicState, {}> = {

  async [QUERY_MUSICS]({ commit }): Promise<any> {
    const response = await axios.get(`/api/my-music/musics`);
    commit(QUERY_MUSICS, { myMusics: response.data });
  },
};
