import { createStore } from 'vuex'
export default createStore({
    state: {
        isCollapse: false
    },
    mutations: {
        changeCollapse(state) {
            state.isCollapse = !state.isCollapse
        }
    }
})