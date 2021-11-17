export const withSort = (
  url: string,
  sortBy: SortBy,
  sortDirection: SortDirection,
) => `${url}&sort=${sortBy}&sort_order=${sortDirection}`;
