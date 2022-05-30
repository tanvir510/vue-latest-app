import { createApp } from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';

/*=============================================
---------------- Plugin Import -----------------
===============================================*/
import axios from './plugins/axios';
import components from './plugins/component';

/*=============================================
---------------- Style Import -----------------
===============================================*/
import './assets/sass/app.scss';

createApp(App).use(store).use(router).use(axios).use(components).mount('#app');
