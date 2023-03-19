import { Box, Paper, Typography, Badge } from "@mui/material"
import Grid from '@mui/material/Grid';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import LogoutIcon from '@mui/icons-material/Logout';
import { SideBar, BooksTables, PagesTable, AddBookModal, Page } from "../components/bookCreator.components";
import { styled } from '@mui/material/styles';
import { useState, useEffect } from "react";
import { useLocation, useSearchParams, useLoaderData, useNavigate , useRouteLoaderData} from 'react-router-dom';
import axios from 'axios'







export const BookCreator = ()=>{
    const [searchParams] = useSearchParams()
    const navigate = useNavigate()
    const [step, setStep] = useState(1)
    const [addTitle, setAddTitle] = useState(true)
    const [booksData, setBooksData] = useState([])
    const [bookId, setBookId] = useState('')
    const [pagesData, setPagesData] = useState([])
    const [bookTitleInput, setBookTitleInput] = useState("")
    const [loading, setLoading] = useState(false)
    const [title, setTitle] = useState('Untitled')
    const [description, setDescription] = useState('')
    const [writingStyle, setWritingStyle] = useState('')
    const [generating, setGenerating] = useState(false)
    const [content,setContent] = useState('')
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const id = searchParams.get("id");
    const email = searchParams.get("email");
    const fullname = searchParams.get("fullname");
    const secret = searchParams.get("secret");
    const location = useLocation()
    const books = useRouteLoaderData('book')
    const [whatever, setData] = useState([])






    useEffect(()=>{
            if (email && fullname && secret && id) {
              localStorage.setItem(
                "user",
                JSON.stringify({
                    id,
                    email,
                    fullname,
                    secret,
                })
              );
            }
    },[])

    useEffect(()=>{

        setBooksData(books)
        console.log('books',books.data);
    },[])

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

    const handleDescription = (e)=>{
        setDescription(e)
    }
      

    const handleSaveBook = async ()=>{
        setLoading(true)
        const data =  localStorage.getItem('user')
        const user =  JSON.parse(data)


        const saveBook = await axios.post('http://localhost:8080/api/createBook', {
            title: bookTitleInput,
            user_id: user.id,
            createdAt: new Date().toISOString().slice(0, 10)
        }, {
            headers: {
                "Content-Type": "application/json"
            }
        })

        console.log('saved', saveBook);
        setBooksData(saveBook.data.books)
        setLoading(false)
        setOpen(false)

    }


    const handleClick = async (data)=>{
        console.log('daaaaaaaaaaata', data);
        setBookId(data._id)
        navigate(`pages_table/${data._id}`)
    }

    const handleGenerate = async ()=>{
        let Data = await localStorage.getItem('user')
        const user = await JSON.parse(Data)
        const data = {
            style: writingStyle,
            description: description,
            bookId: bookId,
            userId: user.id,
            title: title
        }

        const generateContent = await axios.post('http://localhost:8080/api/createPage', data, {
            headers: {
                'Content-Type': "application/json",
                'Accept': "application/json",
            }
        })
        setContent(generateContent.data.data)
    }





    return (
        <Box sx={{ flexGrow: 1, height: '100vh'}}>
            <AddBookModal loading={loading} handleSaveBook={handleSaveBook} value={bookTitleInput} handleChange={(e)=>setBookTitleInput(e)}  open={open} handleClose={handleClose}/>
            <Grid zeroMinWidth={true} container style={{ height: '100vh', overflow: 'auto'}}>
                <Grid item xs={3}>
                    <SideBar handleGenerate={handleGenerate} description={description} handleDescription={handleDescription}  handleOpen={handleOpen} handleStyle={handleStyle} writingStyle={writingStyle} handleTitleButton={handleTitleButton} handleTitleInput={(e)=>{
                        setTitle(e.target.value)
                    }} title={title} addTitle={addTitle}  step={step}/>
                </Grid>

                <Grid item xs={9} sx={{ height: 'calc(100vh - 64px)' }}>
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
            {location.pathname == '/book' && booksData !== null && <BooksTables handleClick={handleClick} data={booksData}/>}
            {location.pathname.includes('/book/pages_table/') && <PagesTable />}
            {location.pathname == '/book/create_page' && <Page content={content} title={title}/>}
            </Box>
            </Grid>
            </Grid>
      </Box>
    )
}


// <Box >
// <Paper sx={{width: '100%', height: 50, backgroundColor: 'white', borderBottom: '1px solid black'}}>
//     <Box sx={{width: '95%', height: '100%', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', margin: 'auto'}}>
//             <Typography variant="h6" color={'black'}>
//                 0/Credit
//             </Typography>
//         <Box sx={{width: 90, height: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center'}}>
//             <Badge color="primary"   badgeContent={0} >
//                 <MenuBookIcon style={{color: 'black'}} fontSize="medium" />
//             </Badge>
//             <LogoutIcon style={{color: 'black'}} fontSize="medium" />
//         </Box>
//     </Box>
// </Paper>

// <Outlet/>



// {props.step == 1 &&
//     // <Box sx={{width: '100%',height: '93vh', backgroundColor: 'white', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
//     //     <Paper style={{width: 550, minHeight: 600, border: '2px solid black', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
//     //         <Typography style={{marginBottom: 20}}  variant="h4" color={'black'}>
//     //             {props.title}
//     //         </Typography>
//     //         <Box sx={{width: '85%'}}>
//     //             <Typography lineHeight={1.7} textAlign={'start'} variant="body2" color={'black'}>
//     //             What is Lorem Ipsum?
//     //             Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
//     //             Why do we use it?
//     //             It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
//     //             </Typography>
//     //         </Box>
//     //     </Paper>
//     // </Box>
//     <BooksTables />
// }
// </Box>