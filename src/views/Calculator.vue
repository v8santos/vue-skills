<template>
    <section id="calc-section" class="row justify-content-center">
        <div id="calc">
            <div class="card bg-dark">
                <div id="screen" class="card-header text-light">
                    <div>{{ calc ? calc : '0' }}</div>
                    <div class="text-end">{{ result ? result : '.' }}</div>
                </div>
                <div class="card-body">
                    <div class="row justify-content-end">
                        <button @click="clearAll" class="btn btn-outline-light calc-text col-3">C</button>
                        <button @click="backspace" class="btn btn-outline-light col-3"><font-awesome-icon icon="backspace"/></button>
                    </div>
                    <div class="row">
                        <button @click="concat('7')" class="btn btn-outline-secondary calc-text col-3">7</button>
                        <button @click="concat('8')" class="btn btn-outline-secondary calc-text col-3">8</button>
                        <button @click="concat('9')" class="btn btn-outline-secondary calc-text col-3">9</button>
                        <button @click="concat('/')" class="btn btn-outline-light col-3"><font-awesome-icon icon="divide"/></button>
                    </div>
                    <div class="row">
                        <button @click="concat('4')" class="btn btn-outline-secondary calc-text col-3">4</button>
                        <button @click="concat('5')" class="btn btn-outline-secondary calc-text col-3">5</button>
                        <button @click="concat('6')" class="btn btn-outline-secondary calc-text col-3">6</button>
                        <button @click="concat('*')" class="btn btn-outline-light col-3"><font-awesome-icon icon="times"/></button>
                    </div>
                    <div class="row">
                        <button @click="concat('1')" class="btn btn-outline-secondary calc-text col-3">1</button>
                        <button @click="concat('2')" class="btn btn-outline-secondary calc-text col-3">2</button>
                        <button @click="concat('3')" class="btn btn-outline-secondary calc-text col-3">3</button>
                        <button @click="concat('-')" class="btn btn-outline-light col-3"><font-awesome-icon icon="minus"/></button>
                    </div>
                    <div class="row">
                        <button @click="concat('0')" class="btn btn-outline-secondary calc-text col-3">0</button>
                        <button @click="concat(',')" class="btn btn-outline-secondary calc-text col-3">,</button>
                        <button @click="getResult" class="btn btn-outline-light col-3"><font-awesome-icon icon="equals"/></button>
                        <button @click="concat('+')" class="btn btn-outline-light col-3"><font-awesome-icon icon="plus"/></button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            calc: '0',
            result: '0',
            operation: [],

            theme: 'dark',
            bgTheme: 'bg-dark',
        }
    },
    methods: {
        concat(str) {
            let strNum = str.toString()

            if(strNum == ',') {
                if(this.calc.indexOf(',') === -1) {
                    this.calc += strNum
                }
                return
            }

            if(this.calc == 0) {
                this.calc = strNum
                return
            }

            this.calc += strNum
        },
        backspace() {
            if(this.calc.length <= 1) {
                this.calc = '0'
                return
            }
            this.calc = this.calc.toString().slice(0,-1)
        },
        clearAll() {
            this.calc = '0'
            this.result = '0'
        },
        getResult() {
            let result = ''
            try {
                result = eval(this.calc); 
            } catch (e) {
                if (e instanceof SyntaxError) {
                    result = e.name
                }
            }
            this.result = result
        },
    },
}
</script>

<style lang="scss">
#calc {
    min-width: 200px;
    max-width: 300px;
}
.calc-text {
    font-weight: bolder;
}
.btn {
    border-radius: 0 !important;
}
#screen {
    input {
        direction: rtl;
        display: block;
        width: 100%;
        border: 0;

        &:focus {
            outline: none;
        }
    }
}
</style>