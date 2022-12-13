import { Schema, models, model } from "mongoose"

const postSchema = new Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    author: { type: String, required: true },
    image: { type: String },
})

const Post = models.Post || model("Post", postSchema)

export default Post
