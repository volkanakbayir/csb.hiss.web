import getters from './getters'
import actions from './actions'
import mutations from './mutations'
import menuConfig from '@/config/menu-items.json';

let store = {
    state: {
        menuConfig
    },
    actions,
    getters,
    mutations
};

export default store;