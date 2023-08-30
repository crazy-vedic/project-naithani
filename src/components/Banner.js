import React from 'react';
import logo from './logo.jpg'; // Replace with the path to your logo
import bgImage from './bg.jpg'; // Replace with the path to the Karnataka coffee fields image

function Banner() {
  return (
    <div className="banner" style={{ backgroundImage: `url(${bgImage})` }}>
<img src={logo} style={{ width: "20%" }} alt="Avery Time Logo" />
    </div>
  );
}

export default Banner;
