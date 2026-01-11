import './index.css'

import { createApp } from 'vue'
import router from './router'
import App from './App.vue'

import {
  Button,
  setConfig,
  frappeRequest,
  resourcesPlugin,
  createResource
} from 'frappe-ui'

const app = createApp(App)

setConfig('resourceFetcher', frappeRequest)

app.use(router)
app.use(resourcesPlugin)
app.component('Button', Button)

const userResource = createResource({
  url: '/api/method/simple_ticketing.api.get_user_data',
  auto: true,
  cache: 'current-user'
})

app.provide('userResource', userResource)

app.mount('#app')
