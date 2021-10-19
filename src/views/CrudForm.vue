<template>
    <form class="form">
        <the-sidebar
        :title="title"
        :visible="sidebarState"
        @hide="sidebarState = $event"
        shadow
        >
            <div class="container">
                <div class="mb-3">
                    <label for="">Nome</label>
                    <input :disabled="mode == 'view'" class="form-control" type="text" v-model="form.name">
                </div>
                <div class="mb-3">
                    <label for="">Preço</label>
                    <input :disabled="mode == 'view'" class="form-control" type="text" v-model="form.price">
                </div>
                <div class="mb-3">
                    <label for="">Descrição</label>
                    <textarea
                    :disabled="mode == 'view'"
                    class="form-control"
                    v-model="form.description"
                    rows="4"
                    ></textarea>
                </div>
                <div class="mb-3">
                    <label for="">Categoria</label>
                    <select :disabled="mode == 'view'" class="form-control" v-model="form.category">
                        <option :value="null" disabled>
                            Selecione a categoria
                        </option>
                        <option
                        v-for="category in categories"
                        :key="category.id"
                        :value="category.name"
                        >
                            {{ category.name }}
                        </option>
                    </select>
                </div>
                <div class="mb-3">
                    <label for="">Quantidade</label>
                    <input :disabled="mode == 'view'" class="form-control" type="number" v-model="form.quantity">
                </div>
            </div>
            <template #footer>
                <div class="container my-2" v-show="mode != 'view'">
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
    props: {
        title: {
            type: String,
            default: 'Adicionar produto'
        },
        data: {
            type: Object,
            default: () => {
                return {
                    name: '',
                    description: '',
                    price: "0.00",
                    category: null,
                    quantity: 1,
                }
            }
        },
        mode: {
            type: String,
            default: 'save',
        }
    },
    data() {
        return {
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
                this.$store.commit('products/changeSidebar', {
                    sidebarState: value
                })
            }
        },
        form() {
            return this.data
        },
    },
    methods: {
        getCategories() {
            const data = require('@/data/categories.json')

            return data
        },
        save() {
            if(this.mode == 'view') return
            if(this.form.category == null) {
                alert('Selecione uma categoria!')
                return
            }
            const data = {
                id: ++theId,
                name: this.form.name,
                description: this.form.description,
                price: this.form.price,
                category: this.form.category,
                quantity: this.form.quantity
            }
            this.$store.dispatch(this.mode == 'save' ? 'products/saveData' : 'products/updateData', data)
            .then((response) => {
                this.sidebarState = false
                console.log(response)
            })
        }
    }
}
</script>

<style>

</style>