import { makeStyles } from '@material-ui/core/styles';

export const useStyles = () => {
  const styles = makeStyles(
    (theme) => {
      return ({
        root: {
          display: 'grid',
          gridGap: theme.spacing(1),
          gridTemplateRows: 'auto',
          [theme.breakpoints.up('sm')]: {
            gridTemplateColumns: 'repeat(2, 1fr)',
          },
          [theme.breakpoints.up('lg')]: {
            gridGap: theme.spacing(2),
            gridTemplateColumns: 'repeat(4, 1fr)',
          },
        },
        blockHeight: {
          background: theme.palette.custom.general.surfaceOne,
        },
        blockTime: {
          background: theme.palette.custom.general.surfaceOne,
        },
        price: {
          background: theme.palette.custom.general.surfaceOne,
        },
        validators: {
          background: theme.palette.custom.general.surfaceOne,
        },
      });
    }, { index: 1 },
  )();

  return styles;
};
