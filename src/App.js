import { Box, IconButton, Typography } from '@mui/joy';
import { useState } from 'react';
import CompileModal from './compileModal';
import linkedInOutline from './assets/icons/icons8-linkedin-100.png';
import linkedInFilled from './assets/icons/icons8-linkedin-144.png';
import instaOutline from './assets/icons/icons8-instagram-100.png';
import instaFilled from './assets/icons/icons8-instagram-144.png';
import telegramOutline from './assets/icons/icons8-telegram-100.png';
import telegramFilled from './assets/icons/icons8-telegram-app-144.png';
import githubOutline from './assets/icons/icons8-github-96.png';
import githubFilled from './assets/icons/icons8-github-96-2.png';
import gmailOutline from './assets/icons/icons8-gmail-100.png';
import gmailFilled from './assets/icons/icons8-gmail-144.png';
import phoneOutline from './assets/icons/icons8-phone-100.png';
import phoneFilled from './assets/icons/icons8-phone-number-80.png'
import CodeTyping from './codeTyping';
import { TypeAnimation } from 'react-type-animation';

function App() {
  const [compileModal, setCompileModal] = useState(false);
  const screenW = window.screen.width;
  const screenH = window.screen.height;

  console.log(screenH);
  console.log(screenW);

  return (
    // <div className='App'>
    <Box sx={{ backgroundColor: 'rgb(0, 0, 159)', width: `${screenW}px`, height: `${screenH}px`, justifyContent: 'center', alignItems: 'center' }} >
      <CompileModal open={compileModal} setOpen={setCompileModal} link={'omid'} />


      <Box sx={{ width: '100%', height: '100%', backgroundColor: 'red', justifyContent: 'center', alignItems: 'center' }}>

        <Box>
          <Typography sx={{ color: 'rgb(179, 179, 179)' }} level='h1'>
            Omid Azad
          </Typography>
        </Box>

        <Box sx={{ backgroundColor: 'rgb(21, 148, 146)', border: '2px solid rgb(255, 255, 64)', width: '75%', height: '55%', borderRadius: 'xl', mb: 10, mt: 5 }}>
          <TypeAnimation sequence={['Omid @ webDev ~%', 1000, 'Omid @ devOmid ~%', 1000, `Omid @ Azad ~%`, 1000,]}
            wrapper="span"
            speed={50}
            style={{ fontSize: '1.3em', display: 'inline-block', color: 'rgb(255, 255, 255)' }}
            repeat={0}
          />
        </Box>

        <Box sx={{ display: 'flex', flexDirection: 'row', width: '95%', justifyContent: 'center', alignItems: 'center' }}>

          <Box sx={{ width: '17%' }}>
            <IconButton onClick={() => setCompileModal(true)} >
              <img width={screenW / 7} src={linkedInOutline} />
            </IconButton>
          </Box>

          <Box sx={{ width: '17%' }}>
            <IconButton onClick={() => setCompileModal(true)} >
              <img width={screenW / 7} src={instaOutline} />
            </IconButton>
          </Box>

          <Box sx={{ width: '17%' }}>
            <IconButton onClick={() => setCompileModal(true)} >
              <img width={screenW / 7} src={telegramOutline} />
            </IconButton>
          </Box>

          <Box sx={{ width: '17%' }}>
            <IconButton onClick={() => setCompileModal(true)} >
              <img width={screenW / 7} src={githubOutline} />
            </IconButton>
          </Box>

          <Box sx={{ width: '17%' }}>
            <IconButton onClick={() => setCompileModal(true)} >
              <img width={screenW / 7} src={gmailOutline} />
            </IconButton>
          </Box>

          <Box sx={{ width: '17%' }}>
            <IconButton onClick={() => setCompileModal(true)} >
              <img width={screenW / 7} src={phoneOutline} />
            </IconButton>
          </Box>

        </Box>
      </Box>
    </Box >
    // </div>
  );
}

export default App;
