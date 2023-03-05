import { Box, Typography, Button } from "@mui/material"
import { useState } from "react"



export const SideBar = ()=>{

    const [step, setStep] = useState(0)


    return (
        <Box sx={{width:'100%', height: '100%', backgroundColor: '#E9E8E8'}}>
            {step == 0 && 
                <Box sx={{width: '100%', height:'100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
                    <Typography color={'black'} variant="overline">
                        <b>Start generating your book with the help of AI</b>
                    </Typography>

                    <Button variant="contained" style={{backgroundColor: '#03C988', width: '80%', marginTop: 15}}>
                        Get Started
                    </Button>
                </Box>
            }
        </Box>
    )
}

export const PageContainer = ()=>{

    return (
        <Box sx={{width: '100%'}}>

        </Box>
    )
}