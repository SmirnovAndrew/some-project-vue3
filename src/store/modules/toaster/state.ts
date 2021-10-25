import { deepFreeze } from '@/utils/deepFreeze';
import _ from 'lodash';

export type ToasterMessage = {
  severity?: string;
  content: string;
}

export type ToasterState = {
  messages: ToasterMessage[];
}

export const defaultToasterState = deepFreeze({
  messages: []
});

export const state: ToasterState = _.cloneDeep(defaultToasterState);
