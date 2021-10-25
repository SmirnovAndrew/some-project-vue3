import { ROOT_MUTATIONS_TYPE } from '@/store/names/mutations.names';
import { ActionContext } from 'vuex';
import { RootState } from '@/store/state';
import { ROOT_ACTIONS_TYPE } from '@/store/names/action.name';
import { ApiMethod, httpService } from '@/services/httpService';

const { getMethod } = httpService();

export const actions = {
  async [ROOT_ACTIONS_TYPE.HEALTH_CHECK]({ commit }: ActionContext<RootState, unknown>): Promise<void> {
    const isOk = true;
    const options: ApiMethod = {
      url: '/get'
    };
    await getMethod(options);
    commit(`${ROOT_MUTATIONS_TYPE.HEALTH_CHECK}`, isOk);
  }
};
