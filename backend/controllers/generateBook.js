const bookModal = require('../models/book.model')


exports.createBook = async(req,res)=>{
    const {title, user_id, createdAt} = req.body

    console.log(user_id);

    try {
        const newBook = new bookModal({title: title, user_id: user_id, createdAt: createdAt})
        const book = await newBook.save()
        const allBooks = await bookModal.find({user_id: user_id}).populate('pages')
        res.status(200).json({
        status: 'saved',
        books: allBooks
        })
    } catch (error) {
        res.status(400).send(error)
    }
}


exports.findAllBooks = async (req,res)=>{

    try {
        const getAllBooks = await bookModal.find({user_id: req.body.id}).populate('pages');

        console.log(getAllBooks);

        res.status(200).json({
            data: getAllBooks
        })
    }catch (error) {
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