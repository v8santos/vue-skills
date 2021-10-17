export default {
    namespaced: true,
    state: () => ({
        data: [],
        loading: false,
        sidebarOpen: false,
    }),
    mutations: {
        setData(state, data) {
            state.data = data
        },
        createProduct(state, product) {
            state.data.push(product)
        },
        deleteProduct(state, id) {
            state.data.splice(id, 1)
        },
        loading(state, bool) {
            state.loading = bool
        },
        changeSidebar(state, bool) {
            state.sidebarOpen = bool
        }
    },
    actions: {
        getProducts({ commit }) {
            const products = require('@/data/products.json')

            commit('loading', true)
            
            setTimeout(() => {
                commit('loading', false)
                commit('setData', products)
            }, 500)
        },
        fetchData({ commit }, data) {
            return new Promise((resolve) => {
                setTimeout(() => {
                    commit('createProduct', data)
                    resolve('Produto criado com sucesso!')
                }, 500)
            })
        },
        deleteData({ commit }, id) {
            return new Promise((resolve) => {
                setTimeout(() => {
                    commit('deleteProduct', id)
                    resolve('Produto deletado com sucesso!')
                }, 500)
            })
        }
    }
}