const conntectToDb = require("../../../utils/connectDb")
const PostModel = require("../../../models/postModel")


 async function getPostById(req, res) {
    await conntectToDb()
    const { id } = req.query
    const post = await PostModel.findById(id)
    if(post){
        res.status(200).json(post)
    }else{
        res.status(404)
    }
}

module.exports = getPostById