export const getStringItem = (key: string): string | null => {
  return localStorage.getItem(key)
}