import React from 'react';
import backgroundImage from '../img/backGround.png'
import SearchBar from './SearchBar'
import Header from './Header';

function MainLayout() {
    return (
      <div
        style={{
          backgroundColor:'#febe7c',
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: "bottom",
          height:'100vh',
          overflow:'hidden'
        }}
      >
        <div>
          <Header/>
        </div>
        <div style={{ height: '70vh', display:'flex', justifyContent:'center', alignItems:'center'}}>
            <SearchBar/>
        </div>
      </div>
    );
  }

export default MainLayout