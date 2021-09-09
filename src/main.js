import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

const app = createApp(App)

const axios = require('axios')
app.config.globalProperties.$http = axios

app.use(store).use(router).mount('#app')
