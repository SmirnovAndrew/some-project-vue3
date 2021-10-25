import { state } from '@/store/modules/user/state';
import type { UserState } from '@/store/modules/user/state';
import actions from '@/store/modules/user/actions';
import { mutations } from '@/store/modules/user/mutations';
import { Module } from 'vuex';
import type { RootState } from '@/store/state';

export const user: Module<UserState, RootState> = {
  state,
  actions,
  mutations,
  namespaced: true
};
