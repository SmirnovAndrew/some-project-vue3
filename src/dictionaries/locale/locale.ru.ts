type Locale = {
  monthNames: string[];
  dayNamesMin: string[];
  firstDayOfWeek: number;
}

export const LOCALE_RU: Locale = {
  monthNames: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
  dayNamesMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
  firstDayOfWeek: 1
};

export const YEAR_RANGE = '2000:2100';
