import type { NavigationGuardNext, RouteLocationNormalized } from 'vue-router';
import { store } from '@/store';
import { ROOT_ACTIONS_TYPE } from '@/store/names/action.name';

export const routerGuardsCheckAuth = async(_to: RouteLocationNormalized, _from: RouteLocationNormalized, next: NavigationGuardNext): Promise<void> => {
  const isAuth = !!store.state?.user?.userData?.id;
  if (isAuth) {
    next();
  } else {
    try {
      await store.dispatch(`${ROOT_ACTIONS_TYPE.HEALTH_CHECK}`);
      next();
    } catch (err) {
      console.error(err);
      next();
    }
  }
};
