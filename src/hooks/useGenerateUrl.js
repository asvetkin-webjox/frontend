import { useEffect, useState } from 'react';
import { useMedia } from 'hooks/useMedia';
import { URL } from 'backend/config';

export const useGenerateUrl = () => {
  const [isPage, setPage] = useState(1);
  const defaultUrl = `${URL}/data?page=${isPage}&perPage=20`;

  const [isRegion, setRegion] = useState(false);
  const [isSearch, setSearch] = useState(false);
  const [isSort, setSort] = useState(false);
  const [isOrder, setOrder] = useState(false);
  const { matchesMobile } = useMedia();
  const [isUrl, setUrl] = useState(defaultUrl);

  const searchHandler = (e) => {
    const { value } = e.target;
    const lowerCase = value.toLowerCase();
    const timeOutId = setTimeout(() => setSearch(lowerCase), 500);

    return () => clearTimeout(timeOutId);
  };

  const generateUrl = () => {
    const perPage = matchesMobile ? '1' : '20';
    const url = `${URL}/data?page=${isPage}&perPage=${perPage}`;
    const withRegion = `&region=${isRegion}`;
    const withSearch = `&search=${isSearch}`;
    const withSort = `&sortkey=${isSort}`;
    const withOrder = `&sortorder=${isOrder}`;
    const newUrl =
      url +
      (isRegion ? withRegion : '') +
      (isSearch ? withSearch : '') +
      (isSort ? withSort : '') +
      (isOrder ? withOrder : '');

    return newUrl;
  };

  useEffect(() => {
    setUrl(generateUrl);
  }, [isRegion, isPage, isOrder, isSort, matchesMobile]);

  useEffect(() => {
    setPage(1);
  }, [isRegion, isSearch, isSort]);

  const pageHandler = (e) => {
    const { id } = e.target;
    setPage(id);
  };

  const regionHandler = (e) => setRegion(e);

  const setOrderHandler = (up) => setOrder(up);
  const setSortHandler = (id) => setSort(id);

  const searchBtnHandler = () => {
    setUrl(generateUrl);
  };

  return {
    isPage,
    isSearch,
    isRegion,
    pageHandler,
    regionHandler,
    searchHandler,
    setSortHandler,
    setOrderHandler,
    isUrl,
    searchBtnHandler,
  };
};
