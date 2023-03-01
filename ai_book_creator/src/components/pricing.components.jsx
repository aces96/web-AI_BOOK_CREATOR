import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { Box, Typography, Button } from "@mui/material"
import Grid from '@mui/material/Grid';




export const PricingSection = ()=>{


    const Item = styled(Paper)(({ theme }) => ({
      backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
      ...theme.typography.body2,
      padding: theme.spacing(1),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      height: 250,
      width:'80%',
      margin: 'auto',
      position: 'relative'
    }));

    return (
        <Box sx={{ flexGrow: 1 }}>

          <Grid container spacing={2}>
            <Grid  item xs={4}>
              <Item>
                <Box sx={{width: '90%', height: 50, margin: 'auto'}}>
                <Typography variant='h4'>
                    <b>STARTER</b>
                </Typography>
                    <Box sx={{width: '100%', height: 50, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', borderBottom: '1px solid black'}}>
                    <Typography variant='h4'>
                        <b>$9.99</b>/
                    </Typography>
                    <Typography variant='h6'>
                        10 Credits 
                    </Typography>
                    </Box>

                    <Box sx={{width: '100%', height: 70, display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 1}}>
                        <Typography variant='body2'>
                            get 10 credits for only 9 dollars, where each credit is equal to 1 page
                        </Typography>
                    </Box>

                    <Button variant='contained' style={{backgroundColor: '#EB5353', borderRadius: 10, width: '60%'}}>
                        Subscribe
                    </Button>
                </Box>
              </Item>
            </Grid>
            <Grid item xs={4}>
              <Item>
                <Box sx={{width: '90%', height: 50, margin: 'auto'}}>
                    <Typography variant='h4'>
                        <b>PREMIUM</b>
                    </Typography>
                    <Box sx={{width: '100%', height: 50, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', borderBottom: '1px solid black'}}>
                    <Typography variant='h4'>
                        <b>$29.99</b>/
                    </Typography>
                    <Typography variant='h6'>
                        50 Credits 
                    </Typography>
                    </Box>

                    <Box sx={{width: '100%', height: 70, display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 1}}>
                        <Typography variant='body2'>
                            get 50 credits for only 29 dollars, where each credit is equal to 1 page
                        </Typography>
                    </Box>

                    <Button variant='contained' style={{backgroundColor: '#F9D923', borderRadius: 10, width: '60%'}}>
                        Subscribe
                    </Button>
                </Box>
              </Item>
            </Grid>
            <Grid item xs={4}>
              <Item>
              <Box sx={{width: '90%', height: 50, margin: 'auto'}}>
                    <Typography variant='h4'>
                        <b>PLATINUM</b>
                    </Typography>
                    <Box sx={{width: '100%', height: 50, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', borderBottom: '1px solid black'}}>
                    <Typography variant='h4'>
                        <b>$49.99</b>/
                    </Typography>
                    <Typography variant='h6'>
                        110 Credits 
                    </Typography>
                    </Box>

                    <Box sx={{width: '100%', height: 70, display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 1}}>
                        <Typography variant='body2'>
                            get 110 credits for only 49 dollars, where each credit is equal to 1 page
                        </Typography>
                    </Box>

                    <Button variant='contained' style={{backgroundColor: '#36AE7C', borderRadius: 10, width: '60%'}}>
                        Subscribe
                    </Button>
                </Box>
              </Item>
            </Grid>
          </Grid>
      </Box>
    )
}