const { Configuration, OpenAIApi } = require("openai");
const dotenv = require('dotenv').config();
const pageModal = require("../models/pages.model")


const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);


exports.createPage = async (req,res)=>{
    const {style, description, bookId, number, userId} = req.body
    const prompt = `Write a page from a book based on the following description: ${description}. The writing style should be ${style}. Use your imagination to bring the scene to life and capture the reader's attention.`


    try {
        const content = await openai.createCompletion({
            model: 'gpt-3.5-turbo',
            prompt: 'prompt',
            max_tokens: 800,
            temperature: 0.5,
            top_p: 1
        })

        const addPage = new pageModal({number: number, content: content.choices[0].text, user_id: userId, book_id: bookId})

        await addPage.save()

        res.status(200).json({
            data: content.choices[0].text
        })
    } catch (error) {
        res.status(400).send(error)
    }
}