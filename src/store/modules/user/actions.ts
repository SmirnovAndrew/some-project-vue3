import { USER_ACTIONS_TYPE } from '@/store/names/action.name';
import type { ActionContext } from 'vuex';
import type { UserState } from '@/store/modules/user/state';
import { USER_MUTATIONS_TYPE } from '@/store/names/mutations.names';

export const actions = {
  async [USER_ACTIONS_TYPE.FETCH_CURRENT_USER]({ commit }: ActionContext<UserState, unknown>): Promise<void> {
    const data = {};
    commit(USER_MUTATIONS_TYPE.SET_CURRENT_USER, data);
  },

  async [USER_ACTIONS_TYPE.FETCH_LOG_IN]({ dispatch }: ActionContext<UserState, unknown>, payload: any): Promise<void> {
    const data = payload;
    await dispatch(USER_ACTIONS_TYPE.FETCH_CURRENT_USER, data);
  },

  async [USER_ACTIONS_TYPE.LOG_OUT]({ commit }: ActionContext<UserState, unknown>): Promise<void> {
    localStorage.removeItem('JWT');
    commit(USER_MUTATIONS_TYPE.SET_CURRENT_USER, {});
  }
};
