import { namespace as createVuexClass } from 'vuex-class';

export const namespace = 'mymusic';
export const store = createVuexClass(namespace);

export const QUERY_MUSICS = 'queryMusics';

export interface Music {
  id: string;
  name: string;
  imageSrc: string;
  color: string;
  artist: Artist;
}

export interface Artist {
  id: string;
  name: string;
}

export interface MyMusicState {
  myMusics: Music[];
}
