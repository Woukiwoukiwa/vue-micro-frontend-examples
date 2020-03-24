import * as component from './MyMusic.vue';
import { module, namespace } from './store';

export default {
    component,
    store: {
        namespace,
        module,
    },
};

