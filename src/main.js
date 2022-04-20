import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { createPinia } from 'pinia';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fas);
import { fab } from '@fortawesome/free-brands-svg-icons';
library.add(fab);
import { far } from '@fortawesome/free-regular-svg-icons';
library.add(far);
import { dom } from '@fortawesome/fontawesome-svg-core';
dom.watch();

export const app = createApp(App);
app.use(createPinia());
app.component('font-awesome-icon', FontAwesomeIcon);
app.use(VueToast);
createApp(App).use(router).mount('#app');
