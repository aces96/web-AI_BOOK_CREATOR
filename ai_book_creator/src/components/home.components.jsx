import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import HeaderKidsPic from '../assets/images/headerImage.jpg'
import HeaderImg from '../assets/images/Clouds.jpg'
import HTMLFlipBook from 'react-pageflip';
import BookCover from '../assets/images/bookCover.jpg'
import SecondPageCover from '../assets/images/Margo.jpg'
import '../index.css'
import './components.css'






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
            <Box sx={{width: "80%", margin: 'auto', height: '100%', display: 'flex', alignItems: 'flex-start', flexDirection: 'column' , justifyContent: 'center'}}>
              <Typography style={{fontFamily: 'Roboto'}} color={'black'}  variant='h1'>
                <b>Fast</b>
              </Typography>
              <Typography style={{fontFamily: 'Roboto'}} color={'black'}  variant='h1'>
                <b>Writing</b>
              </Typography>
              <Typography style={{fontFamily: 'Roboto', fontSize: 15}} color={'black'}  variant='overline'>
                <b>AI Book Creator</b>, Revolutionize the way you write books using  GPT-3 ai model.
              </Typography>

              <Button variant='contained' style={{width: 200, height: 60, background: 'linear-gradient(to right bottom, #f12711,  #f5af19', borderRadius: 15, fontSize: 20, marginTop: 5}}>Get Started</Button>
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


export const BookSection = ()=>{


  return (
      <Box sx={{width: '100%', height: 500, backgroundColor: '#f5f5f5'}}>
        <Grid style={{marginTop: 10}} container spacing={2}>
          <Grid item xs={5}>
            <Box sx={{width: "80%", margin: 'auto', height: 500, display: 'flex', alignItems: 'baseline', flexDirection: 'column' , justifyContent: 'center'}}>
              <span style={{background: 'linear-gradient(to right bottom, #f12711,  #f5af19', marginBottom: 5}}>
                <Typography style={{fontFamily: 'Roboto', marginBottom: 2}} color={'white'}  variant='h2'>
                  <b>TRANSFORM .</b>
                </Typography>
              </span>
              <span style={{background: 'linear-gradient(to right bottom, #f12711,  #f5af19', marginBottom: 5}}>
                <Typography style={{fontFamily: 'Roboto', marginBottom: 2}} color={'white'}  variant='h2'>
                  <b>CREATE .</b>
                </Typography>
              </span>
              <span style={{background: 'linear-gradient(to right bottom, #f12711,  #f5af19', marginBottom: 5}}>
                <Typography style={{fontFamily: 'Roboto', marginBottom: 2}} color={'white'}  variant='h2'>
                  <b>IMAGING .</b>
                </Typography>
              </span>
            </Box>
          </Grid>

          <Grid item xs={7}>
            <Box style={{width: '60%', height: '100%',margin: 'auto', position: 'relative'}}>
              <img src={BookCover} style={{width: '100%', height: '100%', position: 'absolute', zIndex: 1}}/>
              <Box sx={{width: '100%', height: '100%', position: 'absolute', zIndex: 2, display: 'flex', flexDirection: 'column', justifyContent: 'center',alignItems: 'center', color: 'white', margin: 'auto', backgroundColor: 'rgba(0,0,0,0.4)'}}>
                <Typography style={{fontSize: 20}} variant='overline'>
                  Why use
                </Typography>
                <Typography color={'#ff9966'} style={{marginBottom: 10}} variant='h3'>
                  AI Book Creator ?
                </Typography>
                <Typography textAlign={'center'} variant='body2'>
                "Unlock the power of GPT-3 with our cutting-edge book generation platform. Whether you're an aspiring author looking for inspiration or a content marketer seeking to create compelling lead magnets, our AI-powered tool will help you create high-quality books in a matter of minutes. Say goodbye to writer's block and tedious research - our platform will do the heavy lifting for you. With our user-friendly interface and customizable settings, you'll be able to create books that match your unique voice and style. Start creating today and see the possibilities that GPT-3 can unlock for you!"                </Typography>
              </Box>
            </Box>
          </Grid>
      </Grid>
      </Box>
  )
}