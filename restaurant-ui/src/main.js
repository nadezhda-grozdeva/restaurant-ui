import './assets/styles/styles.css'

import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import router from './router'
import VueLazyLoad from 'vue3-lazyload'
import { firebaseApp } from './firebase'

const pinia = createPinia();
const app = createApp(App)

app.use(router)
   .use(VueLazyLoad)
   .use(pinia)
   .use(firebaseApp)
   .mount('#app')

