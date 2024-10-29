import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';

const StyledDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiBackdrop-root': {
    [theme.breakpoints.down("lg")]: {
      position: 'absolute',
      left: '50%',
      transform: 'translateX(-50%)',
      width: '375px'
    },
    [theme.breakpoints.up("lg")]: {

      width: '1280px'
    }

  },

  '& .MuiPaper-root': {

    position: 'fixed',
    width: '359px',
    height: '218px',
    borderRadius: '10px 10px 0 0',
    boxShadow: '0 -2px 10px rgba(0, 0, 0, 0.3)',
    [theme.breakpoints.down('lg')]: {
      bottom: 0,
      margin: 0,
      left: '50%',
      transform: 'translateX(-50%)',
    },
    [theme.breakpoints.up('lg')]: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      borderRadius: '10px',
    }
  },
}));

export default StyledDialog;