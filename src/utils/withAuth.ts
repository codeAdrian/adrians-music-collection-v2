export const withAuth = (url: string, append?: boolean) =>
  `${url}${append ? '&' : '?'}token=${import.meta.env.VITE_API_TOKEN}`;
