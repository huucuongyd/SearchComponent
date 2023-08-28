import React from 'react';
import { Dialog, DialogTitle, DialogContent, Slide, Typography, Box, DialogActions } from '@mui/material';
import CloseImg from '../img/CloseIcon.svg'
import Automation from '../img/Setting.svg'

const sizeTextContent = {
  fontSize:'20px',
  fontFamily:'Quicksand, sans-serif',
  fontWeight:'700',
  marginLeft:'20px',
  marginTop:'50px',
  cursor:'pointer'
}
const styleDialog = {
  position: 'absolute',
  height: '100%',
  maxHeight: '100%',
  width:'376px',
  borderRadius: 0,
  margin: 0,
  right:0,
  overflow: 'hidden',
  backgroundColor:'#D9D9D9'
}
const styleDialogTitle = { 
  display:'flex', 
  flexDirection:'row', 
  justifyContent:'center', 
  alignItems:'center', 
  height:'200px', 
  cursor:'pointer'
}
const styleTypographyClose = {
  marginLeft:'20px',
  fontSize:'36px',
  fontFamily:'Quicksand, sans-serif',
  fontWeight:'700',
  letterSpacing:'7px'
}
const styleBoxButton = {
  height:'70px',
  width:'260px',
  borderRadius:'28px',
  display:'flex',
  flexDirection:'row',
  alignItems:'center',
  justifyContent:'center',
  marginLeft:'auto',
  marginRight:'auto',
  marginTop:'70px',
  backgroundColor:'rgba(0, 0, 0, 0.25)',
  "&:hover": {
    backgroundColor: '#50D24D',
    borderRadius:'46px'
  },
  cursor:'pointer'
}
const styleBoxButtonText = {
  fontFamily:'Quicksand, sans-serif',
  fontSize:'24px',
  marginLeft:'30px',
  fontWeight:'700',
  lineHeight:'30px',
  letterSpacing:'4px'
}
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="left" ref={ref} {...props} />;
});

function MenuDialog(props) {
  const { open, setOpen} = props;

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="dialog-title"
        PaperProps={{
          style: styleDialog,
        }}
      >
        <DialogTitle id="dialog-title" style={styleDialogTitle}>
          <DialogActions onClick={handleClose}>
            <img src={CloseImg} alt='Close Img'></img>
            <Typography style={styleTypographyClose}>CLOSE</Typography>
          </DialogActions>
        </DialogTitle>
        <DialogContent>
          <Typography style={sizeTextContent}>How WEOJA works ?</Typography>
          <Typography style={sizeTextContent}>Our Missions</Typography>
          <Typography style={sizeTextContent}>Achievement</Typography>
          <Box sx={styleBoxButton}>
            <img src={Automation} alt='Automation button'/>
            <Typography style={styleBoxButtonText}>CONTROL</Typography>
          </Box>
        </DialogContent>
      </Dialog>
    </div>
  );
}
export default MenuDialog;