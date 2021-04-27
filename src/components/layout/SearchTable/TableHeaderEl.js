import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { UpDown } from 'components/UI/UpDown';
import { ToggleContext } from 'state/context/toggle-context';
import { TableInfo } from 'components/UI/TableInfo';

const useStyles = makeStyles(({ palette: { primary, blueLight } }) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    userSelect: 'none',
    borderRight: `1px solid ${primary.main}`,
    width: ({ sizes, index }) => `${sizes[index]}px`,
  },
  text: {
    marginRight: '2px',
    fontSize: '8px',
    lineHeight: '1',
    transform: 'translate(0, 0px)',
    color: blueLight,
  },
  right: {
    display: 'flex',
    transform: 'translate(8px, 1px)',
    cursor: 'pointer',
    position: 'relative',
    zIndex: '1',
  },
  info: {
    transform: 'translate(-7px, 0px)',
    zIndex: '1',
    cursor: 'pointer',
  },
}));

export const TableHeaderEl = ({ name, sizes = [], index, ...rest }) => {
  const { container, text, right, info } = useStyles({ sizes, index });
  const {
    toggleState: { dimmed },
  } = useContext(ToggleContext);

  return (
    <div className={container}>
      <span className={text}>{name}</span>
      {index !== 0 && (
        <div className={right}>
          <TableInfo index={index} classes={info} />
          <UpDown index={index} dimmed={dimmed} {...rest} />
        </div>
      )}
    </div>
  );
};
