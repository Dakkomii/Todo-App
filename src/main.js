import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { firestorePlugin } from 'vuefire'
import { auth } from "@/firebaseConfig";
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(firestorePlugin)

Vue.config.productionTip = false

let app
auth.onAuthStateChanged(()=>{
    if (!app) {
        new Vue({
            router,
            render: h => h(App)
        }).$mount('#app')
    }  
});