const userModal = require('../models/user.model')



exports.updateCredits = async(req, res)=>{
    const {user_id, credits} = req.body;

    try {
        const getUser = await userModal.findById(user_id);
        if(getUser){
            const update = await userModal.findByIdAndUpdate(user_id, {credits: getUser.credits+credits})
            if(update){
                console.log('update', update);
                res.status(200).json({
                    done: true,
                    data: update
                })
            }else {
                res.status(400).json({
                    done: false
                })
            }
        }else{
            res.status(400).json({
                done: false
            })
        }
        
    } catch (error) {
        res.send(error)
    }
}

exports.getUser = async (req,res)=>{
    const {id} = req.body

    try {
        const user = await userModal.findById(id)

        if(user){
            res.status(200).json({
                done: true,
                user: user
            })
        }else {
            res.status(400).json({
                done: false
            })
        }
    } catch (error) {
        res.send(error)
    }
}

exports.reduceUserCredits = async(req,res)=>{

    const {id} = req.body

    try {
        const getUser = await userModal.findById(id)
        console.log('yoooow');
        if(getUser){
            const update = await userModal.findByIdAndUpdate(id, {credits: getUser.credits-1})
            console.log('update', update);
            if(update){
                const getUser = await userModal.findById(id)
                res.status(200).json({
                    done: true,
                    data: getUser
                })
            }else {
                res.status(400).json({
                    done: false
                })
            }
        }else{
            res.status(400).json({
                done: false
            })
        }
    } catch (error) {
        res.status(400).send(error)
    }
}

