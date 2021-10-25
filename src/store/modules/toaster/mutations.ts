import { TOASTER_MUTATIONS_TYPE } from '@/store/names/mutations.names';
import type { ToasterMessage, ToasterState } from '@/store/modules/toaster/state';
import _ from 'lodash';
import { defaultToasterState } from '@/store/modules/toaster/state';

export const mutations = {
  [TOASTER_MUTATIONS_TYPE.APPEND_MESSAGE](state: ToasterState, payload: ToasterMessage): void {
    state.messages.push(payload);
  },

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  [TOASTER_MUTATIONS_TYPE.RESET_TOASTER_MODULE](state: ToasterState): void {
    state = _.cloneDeep(defaultToasterState);
  }
};
