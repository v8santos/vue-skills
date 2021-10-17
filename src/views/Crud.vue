<template>
    <section class="mb-3">
        <div class="d-flex justify-content-end mb-3">
            <button class="btn btn-primary btn-sm" @click="addProduct">Adicionar</button>
        </div>
        <div class="table-responsive" v-if="!$store.state.products.loading">
            <table
            class="table table-hover"
            v-if="products && products.length > 0"
            >
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Preço</th>
                        <th>Categoria</th>
                        <th>Quantidade</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(product, index) in products" :key="product.id">
                        <td>{{ product.name }}</td>
                        <td>{{ $filters.money(product.price) }}</td>
                        <td>{{ product.category }}</td>
                        <td>{{ product.quantity }}</td>
                        <td>
                            <div class="d-flex">
                                <a href="javascript:void(0)" class="me-2 link-dark" @click="viewItem(product)">
                                    <font-awesome-icon icon="eye"/>
                                </a>
                                <a href="javascript:void(0)" class="me-2 link-primary" @click="editItem(product)">
                                    <font-awesome-icon icon="pencil-alt"/>
                                </a>
                                <a href="javascript:void(0)" class="me-2 link-danger" @click="deleteItem(product, index)">
                                    <font-awesome-icon icon="trash-alt"/>
                                </a>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div v-else>
                <h5 class="text-center"><span class="badge bg-danger">Nenhum produto no momento</span></h5>
            </div>
        </div>
        <div class="text-center" v-else>
            <div class="spinner-border text-primary" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>
        <crud-form></crud-form>
        <h5 class="text-warning my-3">Lembrar de criar um componente de confirmação de envio</h5>
    </section>
</template>

<script>
import { mapState } from 'vuex'
import CrudForm from './CrudForm'

export default {
    components: {
        CrudForm,
    },
    data() {
        return {
        }
    },
    mounted() {
        this.getProducts()
    },
    computed: {
        ...mapState({
            productsStore: state => state.products
        }),
        products() {
            const data = this.productsStore.data
            return data
        },
    },
    methods: {
        getProducts() {
            this.$store.dispatch('products/getProducts')
        },
        deleteItem(product, index) {
            if(confirm(`Certeza que deseja deletar [${product.name}]?`)) {
                
                this.$store.dispatch('products/deleteData', index)
            }
        },
        editItem(product) {
            // abrir modal
            console.log(product)
        },
        viewItem(product) {
            // abrir modal
            console.log(product)
        },
        addProduct() {
            this.$store.commit('products/changeSidebar', true)
        }
    }
}
</script>

<style>

</style>