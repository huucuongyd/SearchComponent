import React from 'react';
import backgroundImage from './img/backGround.png'
import SearchBar from './SearchBar'
import Header from './Header';

function MainLayout() {
    return (
      <div
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          height:'100vh',
        }}
      >
        <Header/>
        <div style={{ height: '70vh', display:'flex', justifyContent:'center', alignItems:'center'}}>
            <SearchBar/>
        </div>
      </div>
    );
  }

export default MainLayout