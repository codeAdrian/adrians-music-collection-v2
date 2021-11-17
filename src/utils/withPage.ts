export const withPage = (url: string, page: number) => {
  if (page === 1) {
    return url;
  }

  return `${url}&page=${page}`;
};
