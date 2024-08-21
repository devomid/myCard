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

  return (
    <Box sx={{ display: 'flex', height: '100vh', width: '100%', backgroundColor: 'rgb(0, 0, 159)', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }} >
      <CompileModal open={compileModal} setOpen={setCompileModal} link={'omid'} />

      <Box>
        <Typography sx={{ color: 'rgb(179, 179, 179)' }} level='h1'>
          Omid Azad
        </Typography>
      </Box>

      <Box sx={{ backgroundColor: 'rgb(21, 148, 146)', border: '2px solid rgb(255, 255, 64)', width: '75%', height: '55%', borderRadius: 'xl', mb: 10, mt: 5, p: 5 }}>
        <TypeAnimation sequence={['Omid @ webDev ~%', 1000, 'Omid @ devOmid ~%', 1000, `Omid @ Azad ~%`, 1000,]}
          wrapper="span"
          speed={50}
          style={{ fontSize: '1.3em', display: 'inline-block', color: 'rgb(255, 255, 255)' }}
          repeat={0}
        />
      </Box>

      <Box sx={{ display: 'flex', flexDirection: 'row', width: '75%', justifyContent: 'space-evenly', alignItems: 'center' }}>
        <Box>
          <IconButton onClick={() => setCompileModal(true)} >
            <img src={linkedInOutline} />
          </IconButton>
        </Box>
        <Box>
          <IconButton onClick={() => setCompileModal(true)} >
            <img src={instaOutline} />
          </IconButton>
        </Box>
        <Box>
          <IconButton onClick={() => setCompileModal(true)} >
            <img src={telegramOutline} />
          </IconButton>
        </Box>
        <Box>
          <IconButton onClick={() => setCompileModal(true)} >
            <img src={githubOutline} />
          </IconButton>
        </Box>
        <Box>
          <IconButton onClick={() => setCompileModal(true)} >
            <img src={gmailOutline} />
          </IconButton>
        </Box>
        <Box>
          <IconButton onClick={() => setCompileModal(true)} >
            <img src={phoneOutline} />
          </IconButton>
        </Box>
      </Box>

    </Box >
  );
}

export default App;
