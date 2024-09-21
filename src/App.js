import { Box, colors, IconButton, Typography } from '@mui/joy';
import { useState } from 'react';
import CompileModal from './compileModal';
import CodeTyping from './codeTyping';
import { TypeAnimation } from 'react-type-animation';
import { SvgIcon } from '@mui/joy';
import icons from './constants/icons';

function App() {
  const [compileModal, setCompileModal] = useState(false);
  const screenW = document.documentElement.clientWidth;
  const screenH = document.documentElement.clientHeight;

  return (
    // <div className='App'>
    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgb(0, 0, 159)', width: `${screenW}px`, height: `100vh`, }}>
      <CompileModal open={compileModal} setOpen={setCompileModal} link={'omid'} />

      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '100%', height: '90%' }}>
        <Box>
          <Typography sx={{ color: 'rgb(179, 179, 179)' }} level='h1'>
            Omid Azad
          </Typography>
        </Box>
        <Box>
          <Typography sx={{ color: 'rgb(179, 179, 179)' }} level='h3'>
            Web Developer & Programmer
          </Typography>
        </Box>

        <Box sx={{ backgroundColor: 'rgba(0, 0, 0)', border: '4px solid rgb(21, 148, 146)', width: '55%', height: '55%', borderRadius: 'xl', mt: 5, p: 2 }}>
          <TypeAnimation sequence={['Omid @ webDev ~%', 100, 'Omid @ devOmid ~%', 300, `Omid @ Azad ~%\n`, 1000]}
            wrapper="span"
            speed={55}
            style={{ fontSize: '1.3em', display: 'inline-block', color: 'rgb(179, 179, 179)', whiteSpace: 'pre-line' }}
            repeat={0}
          />
        </Box>

        <Box sx={{ display: 'flex', flexDirection: 'row', width: '65%', height: '15%', pl: `${screenW / 20}px`, justifyContent: 'right', alignItems: 'flex-end', mt: `${screenH / 30}px` }}>
          <Box sx={{ width: '16.6%' }}>
            <IconButton onClick={() => setCompileModal(true)} >
              <img width={screenW / 13} src={icons.linkedInOutline} />

            </IconButton>
          </Box>

          <Box sx={{ width: '16.6%' }}>
            <IconButton onClick={() => setCompileModal(true)} >
              <img style={{ fill: 'white', color: 'red' }} width={screenW / 13} src={icons.instaOutline} />
            </IconButton>
          </Box>

          <Box sx={{ width: '16.6%' }}>
            <IconButton onClick={() => setCompileModal(true)} >
              <img width={screenW / 13} src={icons.telegramOutline} />
            </IconButton>
          </Box>

          <Box sx={{ width: '16.6%' }}>
            <IconButton onClick={() => setCompileModal(true)} >
              <img width={screenW / 13} src={icons.githubOutline} />
            </IconButton>
          </Box>

          <Box sx={{ width: '16.6%' }}>
            <IconButton onClick={() => setCompileModal(true)} >
              <img width={screenW / 13} src={icons.gmailOutline} />
            </IconButton>
          </Box>

          <Box sx={{ width: '16.6%' }}>
            <IconButton onClick={() => setCompileModal(true)} >
              <img width={screenW / 14} src={icons.phoneOutline} />
            </IconButton>
          </Box>
        </Box>
      </Box>
    </Box>
    // </div>
  );
}

export default App;