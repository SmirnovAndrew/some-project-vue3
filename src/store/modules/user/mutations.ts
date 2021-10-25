import { USER_MUTATIONS_TYPE } from '@/store/names/mutations.names';
import type { User, UserState } from '@/store/modules/user/state';
import _ from 'lodash';
import { defaultUserState } from '@/store/modules/user/state';

export const mutations = {
  [USER_MUTATIONS_TYPE.SET_CURRENT_USER](state: UserState, payload: User): void {
    state.userData = payload;
  },

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  [USER_MUTATIONS_TYPE.RESET_USER_MODULE](state: UserState): void {
    state = _.cloneDeep(defaultUserState);
  }
};
