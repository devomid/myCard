import React, { useState, useEffect } from 'react';
import l1 from './assets/background effect images/1.png';
import l2 from './assets/background effect images/2.png';
import l3 from './assets/background effect images/3.png';
import l4 from './assets/background effect images/4.png';
import l5 from './assets/background effect images/5.png';
import l6 from './assets/background effect images/6.png';
import l7 from './assets/background effect images/7.png';
import { Box, Divider, Link, Typography } from '@mui/joy';
import './App.css'; // Add all the necessary styling here

// Main App component
function App() {
  const [fadeLayers, setFadeLayers] = useState(0); // Track the scroll position for fading layers
  const [showName, setShowName] = useState(false); // To control when the name appears
  const [hoverMenu, setHoverMenu] = useState(false); // Control the hover state of the menu
  const [hoverSocial, setHoverSocial] = useState(false); // Control the hover state of the menu
  const [hoverSubMenu, setHoverSubMenu] = useState(false); // Control the hover state of the menu
  const totalLayers = 7; // Total number of PNG layers

  const images = [l1, l2, l3, l4, l5, l6, l7];

  // Handle scroll event to trigger fade out of layers
  const handleScroll = (e) => {
    e.preventDefault(); // Prevent the default scroll behavior

    const scrollDelta = e.deltaY / 100; // Normalize scroll speed to small increments
    let newFadeLayers = fadeLayers + scrollDelta; // Adjust the scroll speed factor

    // Constrain the fadeLayers value between 0 and totalLayers
    if (newFadeLayers < 0) {
      newFadeLayers = 0;
    } else if (newFadeLayers > totalLayers) {
      newFadeLayers = totalLayers;
    }

    setFadeLayers(newFadeLayers); // Control fading with scroll

    // Show the name when all layers have faded
    if (newFadeLayers >= totalLayers) {
      setShowName(true);
      setTimeout(() => {
        setHoverSocial(true)
      }, 2000);
    } else {
      setShowName(false);
      setHoverSubMenu(false);
      setHoverMenu(false)
      setHoverSocial(false)
    }

    // console.log(Math.floor(newFadeLayers)); // Log the rounded fadeLayer value
  };

  useEffect(() => {
    window.addEventListener('wheel', handleScroll); // Use wheel event to handle scroll
    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, [fadeLayers]);

  return (
    <div className="App">
      <div className='layer'>
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            className={`layer ${fadeLayers > index ? 'fade-out' : ''}`}
            alt={`Layer ${index + 1}`}
          />
        ))}
      </div>

      <Box sx={{ height: '100%', width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'column' }} >
        {showName && (
        <Box sx={{ height: '75%', width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'column' }} >
            <div className="centered-name">
              <h1 onMouseEnter={() => {
                setHoverMenu(true);
              }}>
                I am Omid
              </h1>

              {hoverMenu && (
                  <div onMouseEnter={() => setHoverSubMenu(true)} className={`menu ${hoverMenu ? 'hide' : ''}`}>
                    <h2>My Ups and Downs</h2>
                  </div>
              )}
            </div>
              </Box>
        )}

        <Box sx={{ height: '10%', width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'column', mb: 15, }} >
          {hoverSubMenu && (
            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }} className={`submenu ${hoverSubMenu ? '' : 'hide'}`}>
              <Link sx={{ width: '25%' }} underline='noen' href="#who-am-i">
                <Typography level='body-lg' sx={{ color: 'white', width: '100%' }}>
                  Who am I
                </Typography>
              </Link>
              <Divider orientation="vertical" />
              <Link sx={{ width: '25%' }} underline='noen' href="#what-ive-done">
                <Typography level='body-lg' sx={{ color: 'white', width: '100%' }}>
                  What I've done
                </Typography>
              </Link>
              <Divider orientation="vertical" />
              <Link sx={{ width: '30%' }} underline='noen' href="#what-i-think-i-know">
                <Typography level='body-lg' sx={{ color: 'white', width: '100%' }}>
                  What I think I know
                </Typography>
              </Link>
            </Box>
          )}
        </Box>

        <Box sx={{ height: '5%', width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'end', flexDirection: 'column', }} >
          {hoverSocial && (
            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', mb: 5 }}>
              <div className={`social-icons ${hoverSocial ? '' : 'hide'}`}>
                <Link href="https://linkedin.com" target="_blank" rel="noreferrer">
                  <Typography level='body-sm' sx={{ color: 'white' }}>
                    LinkedIn
                  </Typography>
                </Link>
                <Link href="https://instagram.com" target="_blank" rel="noreferrer">
                  <Typography level='body-sm' sx={{ color: 'white' }}>
                    Instagram
                  </Typography>
                </Link>
                <Link href="https://telegram.org" target="_blank" rel="noreferrer">
                  <Typography level='body-sm' sx={{ color: 'white' }}>
                    Telegram
                  </Typography>
                </Link>
                <Link href="https://whatsapp.com" target="_blank" rel="noreferrer">
                  <Typography level='body-sm' sx={{ color: 'white' }}>
                    WhatsApp
                  </Typography>
                </Link>
                <Link href="https://github.com" target="_blank" rel="noreferrer">
                  <Typography level='body-sm' sx={{ color: 'white' }}>
                    GitHub
                  </Typography>
                </Link>
              </div>
            </Box>
          )}
        </Box>
      </Box>

    </div>
  );
}

export default App;

