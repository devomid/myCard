import { Box, Button, Modal, ModalClose, Sheet, Typography } from '@mui/joy'
import React from 'react'
import Typewriter from 'typewriter-effect';
import { TypeAnimation } from 'react-type-animation';



const CompileModal = ({ open, setOpen, link }) => {
    return (
        <Box>
            <Modal sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', p: 1 }} open={open} onClose={() => setOpen(false)}  >
                <Sheet sx={{ width: '30%', height: '18%', boxShadow: 'lg', backgroundColor: 'rgb(21, 148, 146)', display: 'flex', justifyContent: 'center', alignItems: 'center', p: 0.8 }} variant="outlined" >
                    <Box sx={{ backgroundColor: 'rgb(21, 148, 146)', border: '2px solid white', height: '96%', width: '99%', display: 'flex', justifyContent: 'center', alignItems: 'center', m: '2px', flexDirection: 'column' }}>
                        <Typography sx={{ position: 'absolute', top: 1, color: 'grey', backgroundColor: 'white', p: 0.3 }}>
                            <TypeAnimation sequence={['Are you sure?', 1000]} speed={35} repeat={0} cursor={false} style={{ color: 'rgb(158, 68, 4)' }} />
                        </Typography>

                        <Box sx={{ mt: 4 }}>

                            <TypeAnimation
                                sequence={[
                                    // Same substring at the start will only be typed out once, initially
                                    'You really want to compile and run?',
                                    1000, // wait 1s before replacing "Mice" with "Hamsters"
                                    'You really want to run the Button function?',
                                    1000,
                                    `You really want to go to ${link}?`,
                                    1000,
                                ]}
                                wrapper="span"
                                speed={50}
                                style={{ fontSize: '1.3em', display: 'inline-block', color: 'white' }}
                                repeat={0}
                            />
                        </Box>

                        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-around', alignItems: 'center', mt: 3 }}>
                            <Button sx={{ borderRadius: 0, backgroundColor: 'rgb(255, 255, 64)', color: 'grey', width: '90px' }} onClick={() => setOpen(false)} >Cancel</Button>
                            <Button sx={{ borderRadius: 0, backgroundColor: 'white', color: 'grey', width: '90px', boxShadow: 'xl' }} onClick={() => setOpen(false)}>Yes</Button>
                        </Box>
                    </Box>
                </Sheet>
            </Modal>

        </Box>
    )
}

export default CompileModal


