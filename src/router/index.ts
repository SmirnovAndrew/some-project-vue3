import { createRouter, createWebHistory } from 'vue-router';
import { routes } from '@/router/routes';
import { routerGuardsCheckAuth } from '@/router/routerGuardsCheckAuth';

export const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

router.beforeEach(routerGuardsCheckAuth);
