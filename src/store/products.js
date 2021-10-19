export default {
    namespaced: true,
    state: () => ({
        data: [],
        loading: false,
        sidebarOpen: false,
        form: {
            name: '',
            description: '',
            price: "0.00",
            category: null,
            quantity: 1,
        },
        mode: 'save',
        title: 'Adicionar produto'
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
        changeSidebar(state, { sidebarState = true, form, mode = 'save', title = 'Adicionar produto' }) {
            state.sidebarOpen = sidebarState
            state.form = form ? form : {
                name: '',
                description: '',
                price: "0.00",
                category: null,
                quantity: 1,
            }
            state.mode = mode
            state.title = title
        },
        updateProduct(state, data) {
            state.data = state.data.map(product => {
                return product.id == data.id ? data : product
            })
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
        saveData({ commit }, data) {
            return new Promise((resolve) => {
                setTimeout(() => {
                    commit('createProduct', data)
                    resolve('Produto criado com sucesso!')
                }, 500)
            })
        },
        updateData({ commit }, data) {
            return new Promise((resolve) => {
                setTimeout(() => {
                    commit('updateProduct', data)
                    resolve('Produto atualizado com sucesso!')
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