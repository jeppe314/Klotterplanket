import Post from "../../../models/postModel"
import connectMongo from "../../../utils/connectMongo"

export default async function addPost(req, res) {
    try {
        console.log("CONNECTING")
        await connectMongo()
        console.log("CONNECTED")
        console.log("ADDING DOC")
        const post = await Post.create(req.body)
        console.log("ADDED DOC")
        res.json({ post })
    } catch (error) {
        console.log(error)
    }
}
