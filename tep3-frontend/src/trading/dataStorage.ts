export const clearState = () => {
  localStorage.clear();
};

export const saveState = (key: string, value: any) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const loadState = (key: string) => {
  const item = localStorage.getItem(key);
  return item ? JSON.parse(item) : null;
};
