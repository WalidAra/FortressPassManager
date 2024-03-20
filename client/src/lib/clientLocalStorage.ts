const clientLocalStorage = {
  setItem: ({ key, value }: { key: string; value: string }) => {
    localStorage.setItem(key, value);
  },
  getItem: ({ key }: { key: string }) => {
    return localStorage.getItem(key);
  },
  removeItem: ({ key }: { key: string }) => {
    localStorage.removeItem(key);
  },
};

export default clientLocalStorage;
