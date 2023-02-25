import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import HeaderKidsPic from '../assets/images/headerImage.jpg'
import HeaderImg from '../assets/images/Clouds.jpg'
import '../index.css'






export const NavBar = ()=>{
    return (
        <Box sx={{width: '100%', height: "10%"}}>
          <AppBar style={{width: '100%', height: '100%', backgroundColor: 'transparent', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}} position="static">
            <Box sx={{width: '95%', height: '100%', margin: 'auto', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
            <Typography  fontWeight={800} color={'black'} variant='h5' >
              AI Book Creator
            </Typography>
            <Toolbar style={{ width: '28%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
              
              <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: 'black', cursor: 'pointer', fontSize: 16 }}>
                <a style={{color: "black"}}>HOME</a>
              </Typography>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: 'black', cursor: 'pointer', fontSize: 16 }}>
                <a style={{color: "black"}}>PRICING</a>
              </Typography>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: 'black', cursor: 'pointer', fontSize: 16 }}>
                <a style={{color: "black"}}>ABOUT US</a>
              </Typography>
              <Button style={{color: 'black', backgroundColor: '#ffda00',  borderRadius: 15, width: 120, height: 40}} >Sign Up</Button>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: 'black', cursor: 'pointer', fontSize: 16, marginLeft: 1 }}>
                <a style={{color: "#3C79F5"}}>SIGN IN</a>
              </Typography>
            </Toolbar>
            </Box>
          </AppBar>
        </Box>
      );
}



export const Header = ()=>{

  return (
    <Box sx={{width: '100%', height: 670, position: 'relative'}}>
      <img src={HeaderImg} style={{width: '100%', height: '100%', zIndex: 0, position: 'absolute'}}/>
        <Grid container spacing={2}  sx={{zIndex: 2, position: 'absolute'}}>
          <Grid item xs={6}>
            <Box sx={{width: "80%", margin: 'auto'}}>
              <Typography color={'black'}  variant='h1'>
                Fast
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={6}>
            <Box style={{width: '100%', height: 600}}>
              <img style={{width: '100%', height: '100%'}} src={HeaderKidsPic}/>
            </Box>
          </Grid>
      </Grid>
    </Box>
  )
}