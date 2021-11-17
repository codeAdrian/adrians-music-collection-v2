import { API_ALBUMS_URL } from 'src/constants/api';
import { withAuth } from 'src/utils/withAuth';
import { withPage } from 'src/utils/withPage';
import { withSort } from 'src/utils/withSort';

export const fetchAlbums = async (
  page: number,
  sortBy: SortBy,
  sortDirection: SortDirection,
) => {
  const url = page > 1 ? withPage(API_ALBUMS_URL, page) : API_ALBUMS_URL;
  const urlWithOptions = withSort(url, sortBy, sortDirection);
  const data = await fetch(withAuth(urlWithOptions, true));
  const json = await data.json();
  return json;
};
