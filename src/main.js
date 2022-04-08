import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createVuetify } from 'vuetify'
import { loadFonts } from './plugins/webfontloader'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import 'vuetify/dist/vuetify.min.css'
import "@mdi/font/css/materialdesignicons.css";
import {createStore} from "vuex";

loadFonts()
const vuetify = createVuetify({
    components,
    directives,
    theme: {
        defaultTheme: 'dark'
    }
})

const store = createStore({
    state(){
        return{
            meal: null
        }
    }
})
createApp(App)
  .use(router)
  .use(vuetify)
    .use(store)
  .mount('#app')
