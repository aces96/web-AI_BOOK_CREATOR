const { Configuration, OpenAIApi } = require("openai");
const dotenv = require('dotenv').config();
const pageModal = require("../models/pages.model")
const mongoose = require('mongoose')


const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);


exports.createPage = async (req,res)=>{
    const {style, description, bookId, userId, title} = req.body
    const prompt = `Write a page from a book based on the following description: ${description}. The writing style should be ${style}. Use your imagination to bring the scene to life and capture the reader's attention.`
    console.log('whaaaaaat',bookId);


    try {
        const content = await openai.createCompletion({
            model: 'text-davinci-003',
            prompt: prompt,
            max_tokens: 400,
            temperature: 0.5,
            top_p: 1
        })


        const addPage = new pageModal({ content: {body: content.data.choices[0].text, title: title}, user_id: new mongoose.Types.ObjectId(userId) , book_id: new mongoose.Types.ObjectId(bookId) })

        await addPage.save()

        res.status(200).json({
            data: content.data.choices[0].text
        })
    } catch (error) {
        console.log(error);
        res.status(400).send(error)
    }
}

exports.getPagesById = async (req,res)=>{
    const {userId, bookId} = req.body;

    console.log('user', userId, 'bookId', bookId);

    try {
        const pages = await pageModal.find({user_id: userId, book_id: bookId})
        if(pages){
            const data = {
                success: true,
                pages: pages
            }
            res.status(200).send(pages)
        }else {
            res.status(400).json({
                success: false,
                pages: []
            })
        }
    } catch (error) {
        res.send(error)
    }
}