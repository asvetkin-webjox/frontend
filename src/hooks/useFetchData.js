import { useContext, useEffect, useState } from 'react';
import { useGenerateUrl } from 'hooks/useGenerateUrl';
import { URL } from 'backend/config';

export const useFetchData = () => {
  const regionUrl = `${URL}/regions`;
  const [isLoading, setLoading] = useState(false);
  const [isData, setData] = useState([]);
  const { isUrl, isRegion, isPage, ...rest } = useGenerateUrl();
  const [isRegions, setRegions] = useState(null);

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
    isRegion,
    isUrl,
    isLoading,
    isData,
    setData,
    ...rest,
  };
};
