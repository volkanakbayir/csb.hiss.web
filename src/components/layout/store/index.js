import getters from './getters'
import actions from './actions'
import mutations from './mutations'
let store = {
    state: {
        menuItems: []
    },
    actions,
    getters,
    mutations
};

export default store;