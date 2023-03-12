const mongoose = require('mongoose');
const express = require('express');
const dotenv = require('dotenv').config();
const cors = require('cors');
const bookRouter = require('./router/book.router')
const pageRouter = require('./router/page.router')



const app = express();

app.use(cors());

app.options('*', cors());

app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.use('/api', bookRouter)
app.use('/api', pageRouter)



// app.use('/api/room', roomRouter);


const DB = process.env.DATABASE_LOCAL;
mongoose.connect(DB).then(() => {
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => `Server is running on port ${PORT}`);
    console.log('Connection Successed !!');
    console.log(`Server is running on port ${PORT}`);
}).catch(err => {
    console.log(err);
});