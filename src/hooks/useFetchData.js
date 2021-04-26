import { useContext, useEffect, useState } from 'react';
import { useGenerateUrl } from 'hooks/useGenerateUrl';
import { URL } from 'backend/config';
import { SearchContext } from 'state/context/search-context';

export const useFetchData = (isIndex) => {
  const regionUrl = `${URL}/regions`;
  const [isLoading, setLoading] = useState(false);
  const [isData, setData] = useState([]);
  const { isUrl, isRegion, isPage, ...rest } = useGenerateUrl(isIndex);
  const [isRegions, setRegions] = useState(null);
  const {
    searchCtxState: { isCtxSearch },
    searchDelContext,
  } = useContext(SearchContext);

  // const urls = 'http://45.80.71.95:8280/data?page=1&perPage=20';
  const urls = `${URL}/data?page=1&perPage=20&search=${isCtxSearch}`;
  const genUrl = isCtxSearch ? urls : isUrl;

  useEffect(async () => {
    setLoading(true);

    try {
      if (!isRegions) {
        const req = await Promise.all([fetch(genUrl), fetch(regionUrl)]);

        const [data, regions] = await Promise.all(req.map((res) => res.json()));

        setRegions(regions);
        setData({ data, regions });
      } else {
        const req = await Promise.all([fetch(genUrl)]);
        const [data] = await Promise.all(req.map((res) => res.json()));
        setData({ data, regions: isRegions });
      }
    } catch (error) {
      console.log('useFetchData -> error', error);
    }

    if (!isIndex) searchDelContext();

    setLoading(false);
  }, [isUrl]);

  return {
    isPage,
    isRegion,
    isUrl,
    isLoading,
    isData,
    setData,
    ...rest,
  };
};
