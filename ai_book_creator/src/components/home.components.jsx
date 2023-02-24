import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import '@fontsource/roboto';






export const NavBar = ()=>{
    return (
        <Box sx={{width: '100%', height: 80}}>
          <AppBar style={{width: '100%', height: '100%', backgroundColor: 'transparent', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}} position="static">
            <Typography fontWeight={800} color={'black'} variant='h5' >
              AI Book Creator
            </Typography>
            <Toolbar>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: 'black' }}>
                News
              </Typography>
              <Button style={{color: 'black', backgroundColor: '#ffda00',  borderRadius: 10}} >Login</Button>
            </Toolbar>
          </AppBar>
        </Box>
      );
}