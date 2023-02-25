import { Box } from "@mui/material"
import { NavBar, Header } from "../components/home.components"


export const Home = ()=>{

    return (
        <Box sx={{width: '100%', height: '100%'}}>
            <NavBar/>
            <Header/>
            {/* <div style={{width: '100%',  height: '90%'}}></div> */}

        </Box>
    )

}