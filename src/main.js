import './assets/main.css'

import { createApp , markRaw} from 'vue'
import { createPinia } from 'pinia'
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import piniaPersist from 'pinia-plugin-persist'
import VueApexCharts from "vue3-apexcharts";/* import specific icons */
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faUserSecret)

import App from './App.vue'
import router from './router'

const app = createApp(App)
const pinia = createPinia()
pinia.use(({ store }) => {
    store.router = markRaw(router)
});
pinia.use(piniaPersist)
pinia.use(piniaPluginPersistedstate)
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(router)
app.use(createPinia())
app.use(VueApexCharts);
app.mount('#app')

