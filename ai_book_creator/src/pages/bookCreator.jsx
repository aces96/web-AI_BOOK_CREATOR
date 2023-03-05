import { Box } from "@mui/material"
import Grid from '@mui/material/Grid';
import { SideBar } from "../components/bookCreator.components";
import { styled } from '@mui/material/styles';





export const BookCreator = ()=>{

    const Item = styled(Box)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        textAlign: 'center',
        color: theme.palette.text.secondary,
        height: '100vh'
      }));



    return (
        <Box sx={{width: '100%', height: '100vh', backgroundColor: 'white'}}>
            <Grid container >
                <Grid item xs={3}>
                    <Item>
                        <SideBar />
                    </Item>
                </Grid>
                <Grid item xs={9}>
                </Grid>
            </Grid>
        </Box>
    )
}