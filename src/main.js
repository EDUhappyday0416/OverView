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
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { VBtn } from 'vuetify/components/VBtn'
import { VDatePicker } from 'vuetify/labs/VDatePicker'
// import { VuetifyDateAdapter } from 'vuetify/labs/date/adapters/vuetify'
import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader
import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loader
import VueGoogleMaps from '@fawmi/vue-google-maps'
import {
Quasar,
Loading,
Screen
} from 'quasar'
/* add icons to the library */
library.add(faUserSecret)

// Import icon libraries
import '@quasar/extras/material-icons/material-icons.css'

// Import Quasar css
import 'quasar/src/css/index.sass'

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
app.component('v-date-picker', VDatePicker)


const vuetify = createVuetify({
    components,
    directives,
    aliases: {
        MyBtn: VBtn,
    },
    date: {
        // adapter: VuetifyDateAdapter,
    },
    icons: {
        defaultSet: 'mdi',
        sets: {
            mdi,
        },
        defaults: {
            MyBtn: {
                color: 'primary',
                class: 'my-btn',
                variant: 'tonal',
            },
        },
    },
})

app.use(Quasar, {
    config: {
        screen
    },
    plugins: {
        Loading
    },
})
app.use(router)
app.use(createPinia())
app.use(vuetify)
app.use(Quasar, {
    plugins: {}, // import Quasar plugins and add here
})
app.use(VueGoogleMaps, {
    load: {
        key: 'AIzaSyBE1K72jSB6tbdToohLuaF3cv57OwvPgHM',
    },
})
app.use(VueApexCharts); 
app.mount('#app')

