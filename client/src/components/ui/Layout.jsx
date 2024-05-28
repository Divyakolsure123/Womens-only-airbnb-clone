import React from 'react';
import { Outlet } from 'react-router-dom';

import { Header } from './Header';
import Footer from './Footer';

const Layout = () => {
  return (
    <>
      <Header />
      
      <div className="mx-auto flex min-h-screen max-w-screen-xl flex-col" style={{
        backgroundImage:
        "url('https://www.pixelstalk.net/wp-content/uploads/2016/03/Dark-background-free-download-620x301.jpg')",
   
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundBlendMode: 'luminosity',
      }}>
      <h1 style={{marginTop:'100px',textAlign:'center',fontSize:'35px',fontWeight:'bold',color:'#00e5ff'}}>WELCOME TO WOMENS ONLY AIRBNB</h1>
        <Outlet />
       <div><Footer /></div>
      </div>
      
    </>
  );
};

export default Layout;
