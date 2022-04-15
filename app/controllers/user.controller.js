const User = require('../models/User.model')

exports.addUser = async (req, res) => {
    try {
        const user = new User(req.body)
        const saveUser = await user.save()
        res.json(saveUser)
    }
    catch (error){
        res.json({msg: error})
    }
}

exports.getUser = async (req, res) => {
    try{
        const user = await User.find()
        res.json(user)
    }
    catch (error){
        res.json({msg: error})
    }
}

exports.getUserById = async (req, res) => {
    try{
        const getUserById = await User.findById(req.params.userId)
        res.json(getUserById)
    }
    catch (error){
        res.json({msg: error})
    }
}

exports.updateUser = async(req, res) => {
    try{
        const updateUser = await User.findByIdAndUpdate(req.params.userId, req.body)
        res.json(updateUser)
    }
    catch(error){
        res.json({msg: error})
    }
}

exports.deleteUser = async(req, res) => {
    try{
        const deleteUser = await User.remove({ _id: req.params.userId})
        res.json(deleteUser)
    }
    catch(error){
        res.json({msg: error})
    }
}

