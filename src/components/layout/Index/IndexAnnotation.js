import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    margin: '0 auto 83px auto',
    maxWidth: '617px',
    textAlign: 'center',
  },
}));

export const IndexAnnotation = ({}) => {
  const { container } = useStyles();

  return (
    <div className={container}>
      <div>
        Платформа собирает и анализирует Big Data о нишах и конкурентах из официальных источников.
        <br />
        Узнайте, насколько перспективен будет запуск выбранной вами ниши, развитие дилерства и
        франчайзинга.
      </div>
    </div>
  );
};
