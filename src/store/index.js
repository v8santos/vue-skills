import { createStore } from 'vuex'

// modules
import products from './products'

export default createStore({
    modules: {
        products
    }
})
