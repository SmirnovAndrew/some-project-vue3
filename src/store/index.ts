import { createStore, createLogger } from 'vuex';
import type { RootState } from './state';
import { state } from './state';
import { mutations } from './mutations';
import { actions } from './actions';
import { user } from '@/store/modules/user';
import { toaster } from '@/store/modules/toaster';
import { MODULES_NAMES } from '@/store/names/modules.name';

export const store = createStore<RootState>({
  plugins: process.env.NODE_ENV === 'production'
    ? []
    : [createLogger()],
  devtools: true,
  state,
  mutations,
  actions,
  modules: {
    [MODULES_NAMES.USER]: user,
    [MODULES_NAMES.TOASTER]: toaster

  }
});
