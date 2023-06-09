import { createApp } from 'vue'

import AppVue from './App.vue'

import router from './router'

import { naive } from './naive'

import pinia from './pinia'

import { Debug } from './libs/Debug'
Debug.Instance.Run()

import { AppRequest } from './libs/AppRequest'
AppRequest.Instance.Run()

createApp(AppVue)
  .use(router)
  .use(naive)
  .use(pinia)
  .mount('#app')
