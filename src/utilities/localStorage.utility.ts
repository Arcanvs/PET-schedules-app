export const setLocalStorage = <T> (name: string, value: T) => {
    localStorage.setItem(name, JSON.stringify({ ...value }));
}

export const delLocalStorage = (name: string) => {
    localStorage.removeItem(name);
}