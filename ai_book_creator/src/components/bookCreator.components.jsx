import { Box, Typography, Button, Badge, TextField, Paper } from "@mui/material"
import { useState } from "react"
import MenuBookIcon from '@mui/icons-material/MenuBook';
import LogoutIcon from '@mui/icons-material/Logout';
import { ReactComponent as Empty } from '../assets/empty.svg'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';



export const SideBar = (props)=>{



    return (
        <Box sx={{height: '100%',backgroundColor: '#2F89FC', borderRight: '1px solid #2F89FC'}}>
            {props.step == 0 && 
                <Box sx={{width: '100%', height:'100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
                    <Typography color={'black'} variant="overline">
                        <b>Start generating your book with the help of AI</b>
                    </Typography>

                    <Button variant="contained" style={{backgroundColor: '#03C988', width: '80%', marginTop: 15}}>
                        Get Started
                    </Button>
                </Box>
            }
            {props.step == 1 && 
                <Box sx={{width: '100%', height:'100%', display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
                    <Box sx={{width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginBottom: 5}}>
                        <Button onClick={()=>props.handleTitleButton()} style={{width: '100%', height: 40, display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: 'white', marginTop: 10, marginBottom: 10}} variant='text' endIcon={props.addTitle ? <RemoveIcon/> : <AddIcon />}>
                            {props.addTitle ? 'Remove Title' : 'Add Title'}
                        </Button>
                        {props.addTitle && 
                            <TextField onChange={(e)=>{
                                props.handleTitleInput(e)
                            }} size='small' variant="outlined" placeholder="enter a title" value={props.title} style={{width: '95%', backgroundColor: 'white', color: 'black'}}/>
                        }
                    </Box>
                    <Typography style={{marginBottom: 10}} textAlign={'center'} variant="body2">
                        Select A writing Style
                    </Typography>
                    <Select
                        style={{backgroundColor: 'white', width: 300}}
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        size="small"
                        value={props.writingStyle}
                        onChange={(e)=>{
                            props.handleStyle(e)
                        }}
                        defaultValue={'None'}
                        >
                        <MenuItem value={'Persuasive'}>Persuasive</MenuItem>
                        <MenuItem value={'Narrative'}>Narrative</MenuItem>
                        <MenuItem value={'Expository'}>Expository</MenuItem>
                        <MenuItem value={'Descriptive'}>Descriptive</MenuItem>
                    </Select>
                    <Typography style={{marginTop: 30}}  textAlign={'center'} variant="body2">
                        Provide specific details and examples to get best results and help Gpt-3 understand the context and purpose of the page.
                    </Typography>
                    <TextField rows={5} multiline style={{backgroundColor: 'white', marginTop: 20, width: '95%', marginBottom: 40}}  variant="outlined" placeholder="describe your idea"/>
                    <Button style={{width: '95%', backgroundColor: '#16C79A'}} variant="contained" >
                        Generate
                    </Button>
                </Box>
            }
        </Box>
    )
}

export const PageContainer = (props)=>{

    return (
        <Box >
            <Paper sx={{width: '100%', height: 50, backgroundColor: 'white', borderBottom: '1px solid black'}}>
                <Box sx={{width: '95%', height: '100%', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', margin: 'auto'}}>
                        <Typography variant="h6" color={'black'}>
                            0/Credit
                        </Typography>
                    <Box sx={{width: 90, height: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center'}}>
                        <Badge color="primary"   badgeContent={0} >
                            <MenuBookIcon style={{color: 'black'}} fontSize="medium" />
                        </Badge>
                        <LogoutIcon style={{color: 'black'}} fontSize="medium" />
                    </Box>
                </Box>
            </Paper>

            {props.step == 0 &&
                <Box sx={{width: '100%', height: 700, backgroundColor: 'white', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                    <Empty style={{width: 200, height: 200}}/>
                    <Typography color={'black'} variant="overline">
                        nothing to display start generating 
                    </Typography>
                    <Button variant="contained" style={{backgroundColor: '#03C988', width: '70%', marginTop: 15, height: 40}}>
                        Get Started
                    </Button>
                </Box>
            }

            {props.step == 1 &&
                <Box sx={{width: '100%',height: '93vh', backgroundColor: 'white', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                    <Paper style={{width: 550, minHeight: 600, border: '2px solid black', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                        <Typography style={{marginBottom: 20}}  variant="h4" color={'black'}>
                            {props.title}
                        </Typography>
                        <Box sx={{width: '85%'}}>
                            <Typography lineHeight={1.7} textAlign={'start'} variant="body2" color={'black'}>
                            What is Lorem Ipsum?
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            Why do we use it?
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                            </Typography>
                        </Box>
                    </Paper>
                </Box>
            }
        </Box>
    )
}