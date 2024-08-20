import { Box, Button, Modal, ModalClose, Sheet, Typography } from '@mui/joy'
import React from 'react'
import Typewriter from 'typewriter-effect';


const confirm = ()=>{}

const CompileModal = ({ open, setOpen, link }) => {
    return (
        <Box>
            <Modal sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} open={open} onClose={() => setOpen(false)}  >
                <Sheet sx={{ width: '30%', height: '18%', boxShadow: 'lg', backgroundColor: 'rgb(155, 155, 155)', display: 'flex', justifyContent: 'center', alignItems: 'center', p: 0.8 }} variant="outlined" >
                    <Box sx={{ backgroundColor: 'rgb(155, 155, 155)', border: '2.5px solid white', height: '100%', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Box sx={{ backgroundColor: 'rgb(155, 155, 155)', border: '2.5px solid white', height: '96%', width: '99%', display: 'flex', justifyContent: 'center', alignItems: 'center', m: '2px', flexDirection: 'column' }}>
                            <Typography sx={{ position: 'absolute', top: 1, color: 'grey', backgroundColor: 'white' }}>
                                Are you sure?
                            </Typography>
                            <Box sx={{ color: 'white' }}>
                                <Typewriter options={{ strings: [`Are you sure you want to compile and redirect to ${link}?`], autoStart: true }} />
                            </Box>
                            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-around', alignItems: 'center', mt: 5 }}>
                                <Button sx={{ borderRadius: 0, backgroundColor: 'white', color: 'grey', width: '90px' }} onClick={confirm}>Yes</Button>
                                <Button sx={{ borderRadius: 0, backgroundColor: 'white', color: 'grey', width: '90px' }} >Cancel</Button>
                            </Box>
                        </Box>
                    </Box>
                </Sheet>
            </Modal>

        </Box>
    )
}

export default CompileModal


