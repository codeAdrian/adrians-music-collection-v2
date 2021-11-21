export const getTheme = () =>
  (typeof window !== 'undefined' && document?.body?.dataset?.theme) ?? 'light';
