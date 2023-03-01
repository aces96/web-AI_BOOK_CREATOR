import { Box } from "@mui/material"
import { NavBar, Header, BookSection, LearnMore, CardsSection } from "../components/home.components"


export const Home = ()=>{

    return (
        <Box sx={{width: '100%', height: '100%'}}>
            <NavBar/>
            <Header/>
            <BookSection />
            <LearnMore />
            {/* <div style={{width: '100%',  height: '90%'}}></div> */}

        </Box>
    )

}