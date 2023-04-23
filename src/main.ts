/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable */
import { createApp } from 'vue';
import PrimeVue from 'primevue/config';
import App from './App.vue';

import router from './router';

import './index.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';

const app = createApp(App);
app.use(router);
app.use(PrimeVue);

app.mount('#app');
