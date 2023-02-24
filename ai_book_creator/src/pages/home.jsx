import { Box } from "@mui/material"
import { NavBar } from "../components/home.components"


export const Home = ()=>{

    return (
        <Box sx={{width: '100%', height: '100%'}}>
            <NavBar/>
            <div style={{width: '100%',  height: '90%'}}></div>

        </Box>
    )

}