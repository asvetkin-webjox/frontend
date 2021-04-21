import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import { useState } from 'react';

export const useMedia = () => {
  const theme = useTheme();
  const [isChanged, setChanged] = useState(false);
  const changeHandler = () => setChanged((o) => !o);

  const matchesTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  const matchesMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const matchesDesktop = useMediaQuery(theme.breakpoints.down('sm'));
  const matchesHD = useMediaQuery(theme.breakpoints.up('xl'));
  const matchBoth = matchesTablet || matchesMobile;
  const matchAll = matchesTablet || matchesMobile || matchesDesktop;

  return {
    matchesTablet,
    matchesMobile,
    matchBoth,
    matchAll,
    matchesDesktop,
    matchesHD,
    isChanged,
    changeHandler,
  };
};
