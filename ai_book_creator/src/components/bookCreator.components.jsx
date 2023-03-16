import { Box, Typography, Button, Badge, TextField, Paper, IconButton, CircularProgress } from "@mui/material"
import { useState } from "react"
import MenuBookIcon from '@mui/icons-material/MenuBook';
import LogoutIcon from '@mui/icons-material/Logout';
import { ReactComponent as Empty } from '../assets/empty.svg'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import DeleteIcon from '@mui/icons-material/Delete';
import { Outlet, useLocation } from "react-router-dom";
import Modal from '@mui/material/Modal';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import { useNavigate } from "react-router-dom";




export const SideBar = (props)=>{

    const location = useLocation()
    const navigate = useNavigate()



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

            {location.pathname == "/book" && 
                <Box sx={{width: '100%', height:'100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
                <Typography color={'white'} variant="overline">
                    <b>Select a book to start working</b>
                </Typography>
                <Button onClick={()=>props.handleOpen()} variant="contained" style={{backgroundColor: '#03C988', width: '80%', marginTop: 15}}>
                    Add New
                </Button>
                </Box>
            }

            {location.pathname == "/book/pages_table" && 
                <Box sx={{width: '100%', height:'100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
                <Typography color={'white'} variant="h6">
                    <b>Add a new page to your book</b>
                </Typography>
                <Button onClick={()=>navigate('create_page')} variant="contained" style={{backgroundColor: '#03C988', width: '80%', marginTop: 15}}>
                    Add New
                </Button>
                </Box>
            }

                {location.pathname == "/book/create_page" &&
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
                    <TextField onChange={(e)=>props.handleDescription(e.target.value)} rows={5} multiline style={{backgroundColor: 'white', marginTop: 20, width: '95%', marginBottom: 40}} value={props.description}  variant="outlined" placeholder="describe your idea"/>
                    <Button onClick={()=>props.handleGenerate()} style={{width: '95%', backgroundColor: '#16C79A'}} variant="contained" >
                        Generate
                    </Button>
                </Box>
                }
        </Box>
    )
}

export const BooksTables = (props)=>{

    return(
        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell >Title</TableCell>
              <TableCell >Number of Pages</TableCell>
              <TableCell >Created at</TableCell>
              <TableCell >Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.data.map((row) => (
              <TableRow
                key={row.title}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell><a style={{cursor: 'pointer', textDecoration: 'underline'}} onClick={()=>props.handleClick(row)}>{row.title}</a></TableCell>
                <TableCell >{row.pages.length}</TableCell>
                <TableCell >{row.createdAt}</TableCell>
                <TableCell >
                    <IconButton style={{color:"red"}} >
                        <DeleteIcon />
                    </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    )
}

export const NothingCreated = ()=>{
     return (
        <Box sx={{width: '100%', height: 700, backgroundColor: 'white', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                    <Empty style={{width: 200, height: 200}}/>
            <Typography color={'black'} variant="overline">
                nothing to display start generating 
            </Typography>
            <Button variant="contained" style={{backgroundColor: '#03C988', width: '70%', marginTop: 15, height: 40}}>
                Get Started
            </Button>
        </Box>
     )
}

export const Page = (props)=>{
    return (
                        <Box sx={{width: '100%',height: '93vh', backgroundColor: 'white', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                    <Paper style={{width: 550, minHeight: 600, border: '2px solid black', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                        <Typography style={{marginBottom: 20}}  variant="h4" color={'black'}>
                            {props.title}
                        </Typography>
                        <Box sx={{width: '85%'}}>
                            <Typography lineHeight={1.7} textAlign={'start'} variant="body2" color={'black'}>
                              {props.content.length > 3 ? props.content : 
                                `What is Lorem Ipsum?
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                Why do we use it?
                                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).`
                              }
                            </Typography>
                        </Box>
                    </Paper>
                </Box>
    )
}



export const PagesTable = (props)=>{




    return(
        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell >Title</TableCell>
              <TableCell >content</TableCell>
              <TableCell >Created at</TableCell>
              <TableCell >Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.data.map((row) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.title}
                </TableCell>
                <TableCell >{row.content}</TableCell>
                <TableCell >{row.createdAt}</TableCell>
                <TableCell >
                    <IconButton style={{color:"red"}} >
                        <DeleteIcon />
                    </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    )
}


export const AddBookModal = (props)=>{

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    minHeight: 250,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around'
  };
  

  return (
    <Modal
    open={props.open}
    onClose={props.handleClose}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
  >
    <Box sx={style}>
      <ImportContactsIcon  style={{width: 70, height: 70, color: '#03C988'}} />
      <Typography color={'black'} id="modal-modal-title" variant="h5">
        Add the Book title
      </Typography>
      <TextField value={props.value} onChange={(e)=>props.handleChange(e.target.value)} style={{width: '90%'}} size="small" placeholder="a book title" label='Title' variant="outlined"/>
      <Button onClick={()=>props.handleSaveBook()}  variant="contained" style={{backgroundColor: '#03C988', width: '80%', marginTop: 15, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        {props.loading ? 
          <CircularProgress size={20}/>
        : "Save"}
      </Button>
    </Box>
  </Modal>
  )
}