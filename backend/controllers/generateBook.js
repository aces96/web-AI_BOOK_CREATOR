const bookModal = require('../models/book.model')


exports.createBook = async(req,res)=>{
    const {data} = req.body

    try {
        const newBook = new bookModal({title: data.title, user_id: data.user_id})
        await newBook.save((error, savedDoc)=>{
            if(error){
                res.status(400).json({
                    status: 'failed',
                    message: error
                })
            }else{
                res.status(200).json({
                    status: 'saved',
                    message: savedDoc
                })
            }
        })
    } catch (error) {
        res.status(400).send(error)
    }
}


exports.findAllBooks = async (req,res)=>{

    try {
        const getAllBooks = await bookModal.find({});

        res.status(200).json({
            data: getAllBooks
        })
    } catch (error) {
        res.status(400).send(error)
    }
}

exports.removeBook = async(req,res)=>{

    const {title} = req.body

    try {
        const removeBook = await bookModal.findOneAndRemove({title: title})

        res.status(200).json({
            data: removeBook
        })
    } catch (error) {
        res.status(400).send(error)
    }

}