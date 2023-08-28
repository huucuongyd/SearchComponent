import { useState } from 'react';
import Logo from '../img/LogoMain.svg'
import Menu from '../img/MenuIcon.svg'
import MenuDialog from '../dialogs/MenuDialog';

function Header() {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
    
    const style = {
        display:'flex', 
        width:'86%', 
        justifyContent:'center', 
        marginLeft:'7%',
        marginRight:'7%',
    }
  
    const imgStyle = {
      background: 'none',
      position: 'fixed',
      top: '70px',
      right: '3%',
      cursor: 'pointer',
      padding:'4px',
      borderRadius:'4px'
    };
    const styleHeader = {
        display: "flex",
        alignItems:'flex-start',
        justifyContent:'space-around',
        flex:1
    }
    
    return (
        <div style={style}>
            <div style={styleHeader}>
                <button className='ButtonHeader'>HOME</button>
                <button className='ButtonHeader'>PRIVACY</button>
                <img src={Logo} alt='Logo' style={{paddingTop:'55px'}}/>
                <button className='ButtonHeader'>ABOUT</button>
                <button className='ButtonHeader'>FAQ</button>
            </div>
            <img
                src={Menu}
                alt='menu button'
                style={imgStyle}
                onClick={handleClickOpen}
            />
            <MenuDialog open={open} setOpen={setOpen}/>
        </div>

    )
}

export default Header