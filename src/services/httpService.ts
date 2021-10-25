import { API, FULL_PATH } from '@/services/apiService';
import { AxiosRequestConfig, AxiosResponse } from 'axios';

export type ApiMethod = {
  url: string;
  options?: AxiosRequestConfig
}

export type ApiMethodPost = ApiMethod & { params: any }

export interface HttpServiceInterface {
  getMethod: (data: ApiMethod) => Promise<AxiosResponse>
  postMethod: (data: ApiMethodPost) => Promise<AxiosResponse>
  putMethod: (data: ApiMethod) => Promise<AxiosResponse>
  deleteMethod: (data: ApiMethod) => Promise<AxiosResponse>
}

export const httpService = (): HttpServiceInterface => {
  const getMethod = async(data: ApiMethod) => {
    const { url, options } = data;
    return await API.get(`${FULL_PATH}${url}`, options);
  };

  const postMethod = async(data: ApiMethodPost) => {
    const { url, params, options } = data;
    return await API.post(`${FULL_PATH}${url}`, params, options);
  };

  const putMethod = async(data: ApiMethod) => {
    const { url, options } = data;
    return await API.put(`${FULL_PATH}${url}`, options);
  };

  const deleteMethod = async(data: ApiMethod) => {
    const { url, options } = data;
    return await API.delete(`${FULL_PATH}${url}`, options);
  };

  return {
    getMethod, postMethod, putMethod, deleteMethod
  };
};
