// @ts-nocheck
import { createApp } from 'vue';
import App from './App.vue';
import { router } from './router';
import { store } from './store';
import PrimeVue from 'primevue/config';
import Tooltip from 'primevue/tooltip';

import { LOCALE_RU } from '@/dictionaries/locale/locale.ru';

import('primevue/resources/themes/saga-blue/theme.css');
import('primevue/resources/primevue.min.css');
import('primeicons/primeicons.css');
import('primeflex/primeflex.scss');

createApp(App)
  .use(PrimeVue, {
    ripple: true,
    locale: LOCALE_RU,
    zIndex: {
      modal: 2000,    //dialog, sidebar
      overlay: 1000,  //dropdown, overlaypanel
      menu: 1000,     //overlay menus
      tooltip: 1100   //tooltip
    }
  })
  .use(store)
  .use(router)
  .directive('tooltip', Tooltip)
  .mount('#app');
