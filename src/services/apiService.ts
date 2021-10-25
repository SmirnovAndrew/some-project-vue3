import axios, { AxiosRequestConfig } from 'axios';
import { AbortError } from '@/services/utils/errors/abortError';
import { ErrorStatus } from '@/services/utils/errors/errorType';

export const SERVER_URL = process.env.VUE_APP_BACKEND_BASE_URL;
export const BASE_URL = '/rest';
export const API_VERSION = '/v1';
export const FULL_PATH = SERVER_URL + BASE_URL + API_VERSION;

export const API = axios.create({
  baseURL: '/'
});

API.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    const errorStatus = error?.response?.data?.status || error?.response?.status;
    switch (errorStatus) {
      case ErrorStatus.NOT_AUTH: {
        return localStorage.removeItem('JWT');
      }
    }
    if (error.__CANCEL__) {
      return Promise.reject(new AbortError());
    } else {
      return Promise.reject(error);
    }
  }
);

API.interceptors.request.use((config: AxiosRequestConfig) => {
  config.url = encodeURI(config.url!);
  const jwtToken = localStorage.getItem('JWT');
  jwtToken && (config.headers.Authorization = `Bearer ${jwtToken}`);
  return config;
});
