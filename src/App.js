import React, { useState, useEffect } from 'react';
import { Box, Divider, Link, Typography } from '@mui/joy';
import './App.css'; // Add all the necessary styling here
import images from './constants/images.js';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";



// Main App component
function App() {
  const [fadeLayers, setFadeLayers] = useState(0); // Track the scroll position for fading layers
  const [showName, setShowName] = useState(false); // To control when the name appears
  const [hoverMenu, setHoverMenu] = useState(false); // Control the hover state of the menu
  const [hoverSocial, setHoverSocial] = useState(false); // Control the hover state of the menu
  const [hoverSubMenu, setHoverSubMenu] = useState(false); // Control the hover state of the menu
  const totalLayers = 198; // Total number of PNG layers
  const [init, setInit] = useState(false);


  const imgPathes = Object.values(images);

  // Handle scroll event to trigger fade out of layers
  const handleScroll = (e) => {
    e.preventDefault(); // Prevent the default scroll behavior

    const scrollDelta = e.deltaY / 100; // Normalize scroll speed to small increments
    let newFadeLayers = fadeLayers + scrollDelta + 9; // Adjust the scroll speed factor

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

  console.log(imgPathes);

  useEffect(() => {
    Aos.init();

    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });

  }, [])



  return (
    <div className="App">
      <div className='layer'>
        {imgPathes.map((image, index) => (
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
          <Box sx={{ height: '10%', width: '35vw', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', marginTop: '35vh', position: 'fixed' }} >
            <div onMouseOver={() => {
              setHoverMenu(true);
            }} onMouseEnter={() => {
              setHoverMenu(true);
            }} style={{ height: '100%', width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', padding: 10 }}>
              <Typography fontFamily={'MyFont'} sx={{ color: 'white' }} fontSize={90} level='h1' component={'h1'} data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="900">
                I
              </Typography>
              <Typography fontFamily={'MyFont'} sx={{ color: 'white' }} fontSize={90} level='h1' component={'h1'} data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1400">
                am
              </Typography>
              <Typography fontFamily={'MyFont'} sx={{ color: 'white' }} fontSize={90} level='h1' component={'h1'} data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1900">
                Omid
              </Typography>
            </div>
          </Box>
        )}

        <Box sx={{ height: '75%', width: '33vw', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row', marginTop: '20vh', position: 'fixed' }} >
          {hoverMenu && (
            <div onMouseEnter={() => setHoverSubMenu(true)}>
              <Typography sx={{ color: 'white' }} fontFamily={'MyFont1'} fontSize={30} component={'h6'} data-aos="fade-up" data-aos-duration="2000">My Ups and Downs</Typography>
            </div>
          )}
        </Box>

        {/* <Box sx={{ height: '10%', width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'column', position: 'fixed', bgcolor:'red' }} > */}
        {hoverSubMenu && (
          <Box component={'div'} data-aos="fade-up" sx={{ width: '90%', display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', height: '15%', marginTop: '68vh' }} >
            <Link underline='noen' href="#who-am-i">
              <Typography fontFamily={'MyFont'} fontSize={30} component={'body'} data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="900" level='body-lg' sx={{ color: 'white', width: '100%' }}>
                Who am I
              </Typography>
            </Link>
            <Divider orientation="vertical" />
            <Link underline='noen' href="#what-ive-done">
              <Typography fontFamily={'MyFont'} fontSize={30} component={'body'} data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1400" level='body-lg' sx={{ color: 'white', width: '100%' }}>
                What I've done
              </Typography>
            </Link>
            <Divider orientation="vertical" />
            <Link underline='noen' href="#what-i-think-i-know">
              <Typography fontFamily={'MyFont'} fontSize={30} component={'body'} data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1900" level='body-lg' sx={{ color: 'white', width: '100%' }}>
                What I think I know
              </Typography>
            </Link>
          </Box>
        )}
        {/* </Box> */}

        {/* <Box sx={{ height: '5%', width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'end', flexDirection: 'column', }} > */}
        {hoverSocial && (
          <Box sx={{ width: '70%', display: 'flex', justifyContent: 'space-around', alignItems: 'center', mb: 3, position: 'fixed', bottom: 0 }}>
            <Link href="https://www.linkedin.com/in/devomid" target="_blank" rel="noreferrer">
              <Typography fontFamily={'MyFont'} fontSize={18} component={'body'} data-aos="fade-up" data-aos-duration="200" level='body-sm' sx={{ color: 'white' }}>
                LinkedIn
              </Typography>
            </Link>
            <Link href="https://www.instagram.com/o.a.m.z.i.a?igsh=MTBoMnNrZXhsNHk5Yg%3D%3D&utm_source=qr" target="_blank" rel="noreferrer">
              <Typography fontFamily={'MyFont'} fontSize={18} component={'body'} data-aos="fade-up" data-aos-duration="600" level='body-sm' sx={{ color: 'white' }}>
                Instagram
              </Typography>
            </Link>
            <Link href="https://t.me/Omid12011" target="_blank" rel="noreferrer">
              <Typography fontFamily={'MyFont'} fontSize={18} component={'body'} data-aos="fade-up" data-aos-duration="1000" level='body-sm' sx={{ color: 'white' }}>
                Telegram
              </Typography>
            </Link>
            <Link href="https://wa.me/+989393122696" target="_blank" rel="noreferrer">
              <Typography fontFamily={'MyFont'} fontSize={18} component={'body'} data-aos="fade-up" data-aos-duration="1400" level='body-sm' sx={{ color: 'white' }}>
                WhatsApp
              </Typography>
            </Link>
            <Link href="https://github.com/devomid" target="_blank" rel="noreferrer">
              <Typography fontFamily={'MyFont'} fontSize={18} component={'body'} data-aos="fade-up" data-aos-duration="1800" level='body-sm' sx={{ color: 'white' }}>
                GitHub
              </Typography>
            </Link>
          </Box>
        )}
      </Box>
      {/* </Box> */}

    </div>
  );
}

export default App;
