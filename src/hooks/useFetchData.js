import { useContext, useEffect, useState } from 'react';
import { useGenerateUrl } from 'hooks/useGenerateUrl';
import { URL } from 'backend/config';

export const useFetchData = () => {
  const regionUrl = `${URL}/regions`;
  const [isLoading, setLoading] = useState(false);
  const [isData, setData] = useState([]);
  const { isUrl, isSearch, isRegion, isSort, ...rest } = useGenerateUrl();
  const [isPage, setPage] = useState(1);
  const [isRegions, setRegions] = useState(null);

  useEffect(() => {
    setPage(1);
  }, [isRegion, isSearch, isSort]);

  useEffect(async () => {
    setLoading(true);

    try {
      if (!isRegions) {
        const req = await Promise.all([fetch(isUrl), fetch(regionUrl)]);
        const [data, regions] = await Promise.all(req.map((res) => res.json()));
        setRegions(regions);
        setData({ data, regions });
      } else {
        const req = await Promise.all([fetch(isUrl)]);
        const [data] = await Promise.all(req.map((res) => res.json()));
        setData({ data, regions: isRegions });
      }
    } catch (error) {
      console.log('useFetchData -> error', error);
    }

    setLoading(false);
  }, [isUrl]);

  return {
    isPage,
    isSearch,
    isRegion,
    isUrl,
    isLoading,
    isData,
    ...rest,
  };
};
