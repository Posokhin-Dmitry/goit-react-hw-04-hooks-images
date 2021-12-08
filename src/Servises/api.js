import axios from 'axios';

const BASEURL = 'https://pixabay.com/api/';
const key = '23587360-9e8d8834fc0ca0fd407cdbeb2';

export const searchQuery = (page, query, maxPerPage) =>
  axios.get(
    BASEURL +
      `?q=${query}&page=${page}&key=${key}&image_type=photo&orientation=horizontal&per_page=${maxPerPage}`,
  );
