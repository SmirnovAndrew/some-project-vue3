
export const deepFreeze = (obj: any): any => {
  const propNames = Object.getOwnPropertyNames(obj);
  propNames.forEach((name: string) => {
    const prop = obj[name];
    if (typeof prop === 'object' && prop !== null) {
      deepFreeze(prop);
    }
  });

  return Object.freeze(obj);
};
