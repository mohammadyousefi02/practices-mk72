export {}
const conntectToDb = require("../../../utils/connectDb")
const PostModel = require("../../../models/postModel")



async function getPosts(req, res): Promise<void> {
    await conntectToDb()
    const posts = await PostModel.find()
    res.status(200).json(posts)
}


module.exports = getPosts