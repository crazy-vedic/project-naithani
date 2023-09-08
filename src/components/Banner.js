import React from 'react';
import logo from './imgs/bg.jpg'; // Replace with the path to your logo

function Banner() {
  return (
    //<div className="banner" style={{ backgroundImage: `url(${bgImage})` >
    <div className="banner" style={{backgroundColor:'#FF8506'}}>
<img src={logo} style={{ width: "20%" }} alt="Avery Time Logo" />
    </div>
  );
}

export default Banner;
