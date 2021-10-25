export const getDeclensionWord = (value: number, words: string[], isFullText = true): string => {
  const valueRounding = Math.abs(value) % 100;
  const num = valueRounding % 10;
  if (valueRounding > 10 && valueRounding < 20) return isFullText ? `${value} ${words[2]}` : `${words[2]}`;
  if (num > 1 && num < 5) return isFullText ? `${value} ${words[1]}` : `${words[1]}`;
  if (num === 1) return isFullText ? `${value} ${words[0]}` : `${words[0]}`;
  return isFullText ? `${value} ${words[2]}` : `${words[2]}`;
};
