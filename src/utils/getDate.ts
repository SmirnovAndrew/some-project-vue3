import moment from 'moment';

export const getDate = (data: number | undefined | string): string => {
  return moment(data).format('DD.MM.YYYY HH:mm:ss');
};
