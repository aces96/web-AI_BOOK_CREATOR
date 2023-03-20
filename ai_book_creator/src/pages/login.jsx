
import { Box, Paper, Button, Typography } from "@mui/material"
import BgImg from '../assets/images/registerBg.jpg'
import AiIcon from '../assets/images/AIIcon.png'
// import GoogleIcon from '@mui/icons-material/Google';
import GoogleIcon from '../assets/images/logoGoogle.png'
import MicrosoftIcon from '../assets/images/microsoftIcon.png'
import { useNavigate } from "react-router-dom";
import '@fontsource/roboto/700.css';




export const Login = ()=>{

    let navigate = useNavigate(); 



    return (
        <Box sx={{width: "100%", height: '100vh', background: `url(${BgImg})`, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <Paper style={{width: 370, height: 400, borderRadius: 15, position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
                <Box sx={{width: 90, height: 90, borderRadius: 45, backgroundColor: '#BAD7E9', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'absolute', top: -40, alignSelf: 'center', border: '5px solid white', marginLeft: 'auto', marginRight: 'auto', left: 0, right: 0}}>
                    <img src={AiIcon} style={{width: 150, height: 150}} />
                </Box>

                <Typography style={{marginBottom: 2}} color={'black'} variant='h5'>
                    Register Now !
                </Typography>

                <Typography style={{marginBottom: 15}} color={'black'} variant='overline'>
                    And start writing you dreams Book !
                </Typography>


                <Button href='http://153.92.214.13:8080/auth/google' style={{width: '90%', height: 40, marginBottom: 10, position: 'relative'}} variant="outlined">
                    <img style={{width: 30, height: 30, position: 'absolute', left: 5}} src={GoogleIcon} />
                    Login with Google
                </Button>

                <Button style={{width: '90%', height: 40, position: 'relative'}} variant="outlined">
                    <img style={{width: 30, height: 30, position: 'absolute', left: 5}} src={MicrosoftIcon} />
                    Login with Microsoft
                </Button>
            </Paper>
        </Box>
    )
}