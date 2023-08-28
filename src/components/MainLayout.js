import React from 'react';
import backgroundImage from '../img/background.svg'
import SearchBar from './SearchBar'
import Header from './Header';

function MainLayout() {
  const style = {
    backgroundColor:'#febe7c',
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: "bottom",
    height:'100vh',
    overflow:'hidden'
  }
  const styleSearchBar = {
    height: '70vh', 
    display:'flex', 
    justifyContent:'center', 
    alignItems:'center'
  }
    return (
      <div
        style={style}
      >
        <div>
          <Header/>
        </div>
        <div style={styleSearchBar}>
            <SearchBar/>
        </div>
      </div>
    );
  }

export default MainLayout