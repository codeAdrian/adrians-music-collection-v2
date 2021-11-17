import { API_KEY, API_SECRET } from 'src/constants/api';

export const withAuth = (url: string, append?: boolean) =>
  `${url}${append ? '&' : '?'}key=${API_KEY}&secret=${API_SECRET}`;
