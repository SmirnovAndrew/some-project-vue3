import store from '@/store';
import { MODULES_NAMES } from '@/store/names/modules.name';
import { ROOT_MUTATIONS_TYPE, TOASTER_MUTATIONS_TYPE, USER_MUTATIONS_TYPE } from '@/store/names/mutations.names';

export const resetStore = (): void => {
  store.commit(ROOT_MUTATIONS_TYPE.RESET_ROOT_MODULE);
  store.commit(`${MODULES_NAMES.USER}/${USER_MUTATIONS_TYPE.RESET_USER_MODULE}`);
  store.commit(`${MODULES_NAMES.TOASTER}/${TOASTER_MUTATIONS_TYPE.RESET_TOASTER_MODULE}`);
};
