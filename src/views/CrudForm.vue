<template>
    <form class="form">
        <the-sidebar
        title="Adicionar produto"
        :visible="sidebarState"
        @hide="sidebarState = $event"
        shadow
        >
            <div class="container">
                <div class="mb-3">
                    <label for="">Nome</label>
                    <input class="form-control" type="text" v-model="form.name">
                </div>
                <div class="mb-3">
                    <label for="">Preço</label>
                    <input class="form-control" type="text" v-model="form.price">
                </div>
                <div class="mb-3">
                    <label for="">Descrição</label>
                    <textarea
                    class="form-control"
                    v-model="form.description"
                    ></textarea>
                </div>
                <div class="mb-3">
                    <label for="">Categoria</label>
                    <select class="form-control" v-model="form.category">
                        <option :value="null" disabled>
                            Selecione a categoria
                        </option>
                        <option
                        v-for="category in categories"
                        :key="category.id"
                        :value="category.id"
                        >
                            {{ category.name }}
                        </option>
                    </select>
                </div>
                <div class="mb-3">
                    <label for="">Quantidade</label>
                    <input class="form-control" type="number" v-model="form.quantity">
                </div>
            </div>
            <template #footer>
                <div class="container my-2">
                    <button type="button" class="btn btn-success" @click="save">Salvar</button>
                </div>
            </template>
        </the-sidebar>
    </form>
</template>

<script>
let theId = 22 // apenas para demonstração

import { mapState } from 'vuex'
import TheSidebar from '../components/TheSidebar'

export default {
    components: {
        TheSidebar,
    },
    data() {
        return {
            form: {
                name: '',
                description: '',
                price: "0.00",
                category: null,
                quantity: 1,
            },
            categories: [],
        }
    },
    mounted() {
        this.categories = this.getCategories()
    },
    computed: {
        ...mapState(['products']),
        sidebarState: {
            get() {
                return this.products.sidebarOpen
            },
            set(value) {
                this.$store.commit('products/changeSidebar', value)
            }
        },
    },
    methods: {
        getCategories() {
            const data = require('@/data/categories.json')

            return data
        },
        save() {
            const data = {
                id: ++theId,
                name: this.form.name,
                description: this.form.description,
                price: this.form.price,
                category: this.categories[this.form.category-1].name,
                quantity: this.form.quantity
            }
            this.$store.dispatch('products/fetchData', data)
            .then((response) => {
                console.log(response)
            })
        }
    }
}
</script>

<style>

</style>