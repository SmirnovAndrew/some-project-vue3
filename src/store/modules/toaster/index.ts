import { actions } from '@/store/modules/toaster/actions';
import { mutations } from '@/store/modules/toaster/mutations';
import { Module } from 'vuex';
import type { RootState } from '@/store/state';
import type { ToasterState } from '@/store/modules/toaster/state';
import { state } from '@/store/modules/toaster/state';

export const toaster: Module<ToasterState, RootState> = {
  state,
  actions,
  mutations,
  namespaced: true
};
