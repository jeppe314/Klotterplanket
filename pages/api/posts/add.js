import Post from "../../../models/postModel"
import connectMongo from "../../../mongoose"

export default async function addPost(req, res) {
    try {
        await connectMongo()
        const post = await Post.create(req.body)
        res.json({ post })
    } catch (error) {
        console.log(error)
    }
}
