import React from 'react';
import { Dialog, DialogTitle, DialogContent, Slide, Typography, Box, DialogActions } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import Automation from '../img/icons8-automation-50 2.png'

const sizeTextContent = {
    fontSize:'20px',
    fontFamily:'Quicksand, sans-serif',
    fontWeight:'700',
    marginLeft:'20px',
    marginTop:'50px'
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
          style: {
            position: 'absolute',
            height: '100%',
            maxHeight: '100%',
            width:'376px',
            borderRadius: 0,
            margin: 0,
            right:0,
            overflow: 'hidden',
            backgroundColor:'#D9D9D9'
          },
        }}
      >
        <DialogTitle id="dialog-title" style={{ display:'flex', flexDirection:'row', justifyContent:'center', alignItems:'center', height:'200px'}}>
          <DialogActions onClick={handleClose}>
            <ClearIcon style={{
              fontSize:'50px',
              marginRight:'10px'
            }}/>
            <Typography style={{
                fontSize:'36px',
                fontFamily:'Quicksand, sans-serif',
                fontWeight:'700'
            }}>Close</Typography>
          </DialogActions>
        </DialogTitle>
        <DialogContent>
          <Typography style={sizeTextContent}>How WEOJA works ?</Typography>
          <Typography style={sizeTextContent}>Our Missions</Typography>
          <Typography style={sizeTextContent}>Achievement</Typography>
          <Box sx={{
              height:'70px',
              width:'260px',
              borderRadius:'30px',
              display:'flex',
              flexDirection:'row',
              alignItems:'center',
              justifyContent:'center',
              marginLeft:'auto',
              marginRight:'auto',
              marginTop:'70px',
              backgroundColor:'rgba(0, 0, 0, 0.25)',
              "&:hover": {
                backgroundColor: '#50D24D'
              },
              cursor:'pointer'
            }}>
            <img src={Automation} alt='Automation button'/>
            <Typography style={{
              fontFamily:'Quicksand, sans-serif',
              fontSize:'24px',
              marginLeft:'20px',
              fontWeight:'700'
            }}>CONTROL</Typography>
          </Box>
        </DialogContent>
      </Dialog>
    </div>
  );
}
export default MenuDialog;