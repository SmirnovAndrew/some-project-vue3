import { RouteRecordRaw } from 'vue-router';
import { ROUTER_NAMES } from '@/router/rote.names';

export const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: ROUTER_NAMES.MAIN_PAGE,
    component: () => import('@/views/MainPage/MainPage.vue')
  }
];
