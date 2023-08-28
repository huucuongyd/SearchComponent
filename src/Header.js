import { useState } from 'react';
import Logo from './img/logo finalllll-03 1.png'
import Menu from './img/icons8-menu-50 1.png'
import MenuDialog from './dialogs/MenuDialog';

function Header() {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
    
    return (
        <>
            <div style={{
                display: "flex",
                alignItems:'flex-start',
                justifyContent:'center'
            }}>
                <button className='ButtonHeader'>HOME</button>
                <button className='ButtonHeader'>PRIVACY</button>
                <img src={Logo} alt='Logo' style={{paddingTop:'55px'}}/>
                <button className='ButtonHeader'>ABOUT</button>
                <button className='ButtonHeader'>FAQ</button>
                <img src={Menu} alt='menu button' style={{
                    background:'none',
                    position:'fixed',
                    top:'74px',
                    right:'3%',
                    opacity:'0.8'
                }}
                    onClick={handleClickOpen}
                ></img>
            </div>
            <MenuDialog open={open} setOpen={setOpen}/>
        </>

    )
}

export default Header