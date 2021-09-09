<template>
    <div class="card">
        <div class="card-header">
            Conversor de moedas
        </div>
        <div class="card-body">
            <div class="row align-items-end">
                <div class="col-sm-6 mb-3">
                    <label class="mb-2">
                        <select
                        class="form-select form-select-sm"
                        v-model="currency1"
                        >
                            <option
                            v-for="currency in currencies"
                            :key="currency.id"
                            :value="currency.id"
                            >{{currency.id}}</option>
                        </select>
                    </label>
                    <input class="form-control" type="number" min="0" v-model="input">
                </div>
                <div class="col-sm-6 mb-3">
                    <label class="mb-2">
                        <select
                        class="form-select form-select-sm"
                        v-model="currency2"
                        >
                            <option
                            v-for="currency in currencies"
                            :key="currency.id"
                            :value="currency.id"
                            >{{currency.id}}</option>
                        </select>
                    </label>
                    <input class="form-control" disabled :value="output">
                </div>
                <div class="col-12">
                    <button class="btn btn-primary" @click="convert">Converter</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
const baseUrl = 'https://free.currconv.com'
export default {
    data() {
        return {
            currencies: [
                {
                    id: 'USD'
                },
                {
                    id: 'BRL'
                },
            ],
            currency1: 'USD',
            currency2: 'BRL',
            input: 1,
            output: null,
        }
    },
    mounted(){
        this.$http.get(`${baseUrl}/api/v7/currencies?apiKey=e01f599617eb6e6105c7`)
        .then(response => {
            this.currencies = Object.values(response.data.results)

        })
    },
    methods: {
        convert() {
            this.$http.get(`${baseUrl}/api/v7/convert?q=${this.currency1}_${this.currency2}&compact=ultra&apiKey=e01f599617eb6e6105c7`)
            .then(response => {
                this.output = Object.values(response.data)[0] * this.input
            })
        }
    },
}
</script>

<style>

</style>