import type { UserState } from '@/store/modules/user/state';
import type { ToasterState } from '@/store/modules/toaster/state';
import { deepFreeze } from '@/utils/deepFreeze';
import _ from 'lodash';

export type RootState = {
  isOk: boolean;
  user: UserState;
  toaster: ToasterState;
}

export const defaultRootState = deepFreeze({
  isOk: false
});

export const state: RootState = _.cloneDeep(defaultRootState);
