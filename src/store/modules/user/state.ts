import { deepFreeze } from '@/utils/deepFreeze';
import _ from 'lodash';

export type User = {
  id: string
}

export type UserState = {
  userData?: User;
}

export const defaultUserState = deepFreeze({
  userData: undefined
});

export const state: UserState = _.cloneDeep(defaultUserState);
