import type { RootState } from '@/store/state';
import { ROOT_MUTATIONS_TYPE } from '@/store/names/mutations.names';
import _ from 'lodash';
import { defaultRootState } from '@/store/state';

export const mutations = {
  [ROOT_MUTATIONS_TYPE.HEALTH_CHECK](state: RootState, payload: boolean): void {
    state.isOk = payload;
  },

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  [ROOT_MUTATIONS_TYPE.RESET_ROOT_MODULE](state: RootState): void {
    state = _.cloneDeep(defaultRootState);
  }
};
