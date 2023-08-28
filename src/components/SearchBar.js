import searchIcon from '../img/SearchIcon.svg'
import searchIconImage from '../img/SearchImageIcon.svg'
import Shield from '../img/Shield.svg'
import Newspager from '../img/NewspaperIcon.svg'
import VideoIcon from '../img/SearchVideoIcon.svg'
import SearchTopImage from '../img/LogoSearch.svg'
import { Box, Menu, MenuItem } from '@mui/material'
import { useEffect, useState } from 'react';

function SearchBar() {

    const [currentIconSearch, setCurrentIconSearch] = useState(0)
    const [currentSelectIcon, setCurrentSelectIcon] = useState()
    const [currentColorBG, setCurrentColorBG] = useState()
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
      };
  
      const [anchorEl, setAnchorEl] = useState(null);
  
      useEffect(() => {
          switch (currentIconSearch) {
              case 0: 
                  setCurrentSelectIcon(searchIcon)
                  setCurrentColorBG('#33629A')
                  break
              case 1:
                  setCurrentSelectIcon(searchIconImage)
                  setCurrentColorBG('#E4D5D1')
                  break
              case 2:
                  setCurrentSelectIcon(VideoIcon)
                  setCurrentColorBG('#E4D5D1')
                  break
              case 3:
                  setCurrentSelectIcon(Newspager)
                  setCurrentColorBG('#E4D5D1')
                  break
              case 4:
                  setCurrentSelectIcon(Shield)
                  setCurrentColorBG('#E4D5D1')
                  break 
              default:
          }
      },[currentIconSearch])
    
      const handleClose = (value) => {
        setCurrentIconSearch(value)
        setAnchorEl(null);
      };
      const [inputValue, setInputValue] = useState("");
      const handleKeyPress = (event) => {
          if (event.key === 'Enter') {
              console.log('Enter key pressed, input value:', inputValue);
              setInputValue("");
          }
        };

    const styleMenuItem = {
        height:'50px',
        width:'50px',
        borderRadius:'50%',
        backgroundColor:'#E4D5D1',
        boxShadow: '0px 4px 4px 0px #00000040',
        marginTop:'10px',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        "&:hover": {
            backgroundColor: 'transparent'
          }
    }

    const styleImageLogoSearch = {
        position:'fixed',
        marginBottom:'177px',
        marginLeft:'50px'
    }

    const styleInput = {
        fontSize: '24px',
        border: 'none',
        backgroundColor:'transparent',
        outline: 'none',
        width: '90%',
        borderRadius: '12px',
        paddingLeft: '40px',
        textAlign: 'left',
        color: 'white'
    }

    const styleIconSearch = {
        height:'50px',
        minWidth:'50px',
        marginRight:'15px',
        backgroundColor:currentColorBG,
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:'50%',
        boxShadow: '0px 4px 4px 0px #00000040',
        cursor:'pointer',
        visibility: anchorEl ? 'hidden' : 'visible',
    }     
    const style = {
        height: '68px',
        width: '80vh',
        border: '1px solid white',
        borderRadius: '34px',
        backgroundColor: '#7CA0A6',
        display: 'flex',
        alignItems: 'center',
    }
    const stylePaperDrops = {
        background:'none',
        boxShadow:'none',
        marginTop: '8px',
    }
    return (
        <div
            style={style}
        >
            <img src={SearchTopImage} alt='Logo Search' style={styleImageLogoSearch}/>
            <input
                id='inputID'
                style={styleInput}
                value={inputValue}
                onChange={(event) => setInputValue(event.target.value)}
                onKeyPress={handleKeyPress}
                placeholder='CHOSE YOUR TYPES OF SEARCH'
            />
            <Box
                onClick={handleClick}
                sx={styleIconSearch}
                tabIndex="0"
                aria-controls="dropdown-menu"
                aria-haspopup="true"
                variant="contained"
            >   
                <img
                    src={currentSelectIcon}
                    alt="Icon"
                />
            </Box>

            <Menu
                id="dropdown-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
                PaperProps={{
                    style:stylePaperDrops,
                }}
                anchorOrigin={{
                    vertical: "bottom", // Hiển thị ở phía trên của anchorEl (button)
                    horizontal: "center"
                  }}
                transformOrigin={{
                    vertical: "bottom", // Hiển thị ở phía dưới của popover
                    horizontal: "center"
                  }}
            >
                <MenuItem onClick={() => handleClose(4)} sx={styleMenuItem} style={{ backgroundColor: '#E4D5D1' }} value={0}>
                    <img src={Shield} alt='searchIconImage'/>
                </MenuItem>
                <MenuItem onClick={() => handleClose(3)} sx={styleMenuItem} style={{ backgroundColor: '#E4D5D1' }} value={1}>
                    <img src={Newspager} alt='searchIconImage'/>
                </MenuItem>
                <MenuItem onClick={() => handleClose(2)} sx={styleMenuItem} style={{ backgroundColor: '#E4D5D1' }} value={2}>
                    <img src={VideoIcon} alt='searchIconImage'/>
                </MenuItem>
                <MenuItem onClick={() => handleClose(1)} sx={styleMenuItem} style={{ backgroundColor: '#E4D5D1' }} value={3}>
                    <img src={searchIconImage} alt='searchIconImage'/>
                </MenuItem>
                <MenuItem onClick={() => handleClose(0)} sx={styleMenuItem} style={{ backgroundColor: '#375E3D' }} value={4}>
                    <img src={searchIcon} alt="Icon"/>
                </MenuItem>
            </Menu>
        </div>
    )
}

export default SearchBar