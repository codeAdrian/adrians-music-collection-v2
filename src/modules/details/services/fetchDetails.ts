import { API_DETAILS_URL } from 'src/constants/api';
import { withAuth } from 'src/utils/withAuth';

export const fetchDetails = async (page: string) => {
  const data = await fetch(withAuth(`${API_DETAILS_URL}${page}`));
  const json = await data.json();
  return json;
};
