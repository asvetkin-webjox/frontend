import { useEffect, useState, useContext } from 'react';
import { useMedia } from 'hooks/useMedia';
import { URL } from 'backend/config';
import { SearchContext } from 'state/context/search-context';

export const useGenerateUrl = (isIndex) => {
  const [isPage, setPage] = useState(1);
  const defaultUrl = `${URL}/data?page=${isPage}&perPage=20`;
  // const defaultMobile = `${URL}/data?page=${isPage}&perPage=20`;
  const [isRegion, setRegion] = useState(false);
  const [isSort, setSort] = useState(false);
  const [isOrder, setOrder] = useState(false);
  const { matchesMobile, matchesDesktop, matchesTablet } = useMedia();
  const [isUrl, setUrl] = useState(defaultUrl);
  const { searchContext } = useContext(SearchContext);
  const [isSearch, setSearch] = useState();
  const [isAdd, setAdd] = useState('');

  // const addHandler = () => {
  //   if ()
  // }

  useEffect(() => {
    if (isIndex) {
      searchContext(isSearch);
    }
  }, [isSearch]);

  const searchHandler = (e) => {
    const { value } = e.target;
    const timeOutId = setTimeout(() => setSearch(value.toLowerCase()), 300);
    // if (!isIndex && isCtxSearch) searchDelContext();

    return () => clearTimeout(timeOutId);
  };

  const generateUrl = () => {
    // const perPage = matchesMobile ? '1' : '20';
    const perPage = matchesMobile ? Math.ceil(isPage / 20) : isPage;
    // const url = `${URL}/data?page=${isPage}&perPage=20`;
    const url = `${URL}/data?page=${perPage}&perPage=20`;
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
  }, [isRegion, isPage, isOrder, isSort]);

  useEffect(() => {
    setSearch('');
    setPage(1);

    // if (matchesMobile) return setUrl(defaultMobile);

    // return setUrl(defaultUrl);
  }, [matchesDesktop, matchesTablet, matchesMobile]);

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
    if (isSearch === '') return setUrl(`${defaultUrl}&`);
    // if (isCtxSearch) return setUrl(`${defaultUrl}&search=${isCtxSearch}`);
    return setUrl(generateUrl);
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
