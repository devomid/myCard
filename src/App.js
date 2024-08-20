import { Box, Typography } from '@mui/joy';
import { useState } from 'react';
import CompileModal from './compileModal';

function App() {
  const [compileModal, setCompileModal] = useState(false);

  return (
    <Box sx={{ display: 'flex', height: '100vh', width: '100%', backgroundColor: 'rgb(0, 0, 159)', justifyContent: 'center', alignItems: 'center' }} >
      <CompileModal />
      <Box>
        <Typography sx={{ color: 'rgb(179, 179, 179)' }} level='h1'>
          Omid Azad
        </Typography>
      </Box>
      <Box>
        <Typography sx={{ color: 'rgb(179, 179, 179)' }} level='h1'>
          Web Developer and Programmer
        </Typography>
      </Box>
      <Box>
        <Typography sx={{ color: 'rgb(179, 179, 179)' }} level='h1'>
          Web Developer and Programmer
        </Typography>
      </Box>

    </Box>
  );
}

export default App;
