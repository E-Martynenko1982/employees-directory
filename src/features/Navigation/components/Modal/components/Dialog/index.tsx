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
      width: '100%'
    }
  },
  '& .MuiTypography-root': {
    padding: 0,
    marginLeft: '6px'
  },

  '& .MuiButtonBase-root': {
    width: '24px',
    height: '24px',

  },

  '& .MuiPaper-root': {
    position: 'fixed',
    width: '373px',
    height: '192px',
    borderRadius: '5px 5px 0 0',
    boxShadow: '0 -2px 10px rgba(0, 0, 0, 0.3)',
    [theme.breakpoints.down('lg')]: {
      bottom: 0,
      margin: 0,
      left: '50%',
      transform: 'translateX(-50%)',
    },
    [theme.breakpoints.up('lg')]: {
      display: 'flex',
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      borderRadius: '10px',
    }
  },

  '& .MuiFormControlLabel-label': {
    display: 'flex',
    alignItems: 'center',
    height: '60px',
    fontSize: '16px',
    fontWeight: "500",
    lineHeight: "20px",
    color: "#050510"
  },

  '& .MuiRadio-colorPrimary': {
    color: '#6534ff',
  },

  '& .PrivateSwitchBase-input': {

    color: '#6534ff',
  }

}));

export default StyledDialog;