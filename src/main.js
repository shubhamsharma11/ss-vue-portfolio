import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './vuetify'
import { Icon } from '@iconify/vue'

const app = createApp(App)

// Register Global Components
app.component('font-icon', Icon)

// Register Global Plugins
app.use(vuetify)
app.use(router)

app.mount('#app')
