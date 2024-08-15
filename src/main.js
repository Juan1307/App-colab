import { createApp } from 'vue';

import Main from './Main.vue';
import router from './router.js';
import './style.css';

createApp(Main).use(router).mount('#app');
