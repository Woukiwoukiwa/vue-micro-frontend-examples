import { Module } from 'vuex';
import { MyMusicState } from './types';
import { actions } from './actions';
import { getters } from './getters';
import { mutations } from './mutations';

export { namespace } from './types';

export const state: MyMusicState = {
  myMusics: [],
};

const namespaced: boolean = true;

export const module: Module<MyMusicState, {}> = {
  namespaced,
  state,
  actions,
  getters,
  mutations,
};
