import { Box, Paper } from "@mui/material"
import Grid from '@mui/material/Grid';
import { SideBar, PageContainer } from "../components/bookCreator.components";
import { styled } from '@mui/material/styles';
import { useState } from "react";




export const BookCreator = ()=>{
    const [step, setStep] = useState(1)
    const [addTitle, setAddTitle] = useState(true)
    const [title, setTitle] = useState('This is the title')
    const [writingStyle, setWritingStyle] = useState('')


    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        textAlign: 'center',
        color: theme.palette.text.secondary,
      }));


      const handleTitleButton = ()=>{
        setAddTitle(!addTitle)
      }

      const handleStyle = (e)=>{
        setWritingStyle(e.target.value)
        console.log(e.target.value);
      }
      





    return (
        <Box sx={{ flexGrow: 1, height: '100vh'}}>
            <Grid zeroMinWidth={true} container style={{ height: '100vh', overflow: 'auto'}}>
                <Grid item xs={3}>
                    <SideBar handleStyle={handleStyle} writingStyle={writingStyle} handleTitleButton={handleTitleButton} handleTitleInput={(e)=>{
                        setTitle(e.target.value)
                    }} title={title} addTitle={addTitle}  step={step}/>
                </Grid>
                <Grid item xs={9} sx={{ height: 'calc(100vh - 64px)' }}>
                    <PageContainer title={title} step={step} />
                </Grid>
            </Grid>
      </Box>
    )
}