import React, { useEffect, useState } from "react"
import axios from "axios"
import { useUser } from "@auth0/nextjs-auth0/client"
// import Post from "../models/postModel"

const BlogPostForm = () => {
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const { user } = useUser()

    // useEffect(() => {
    //     Post.watch("change", console.log("NU HÄNDER NÅGGI"))
    // }, [])

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log("NU KÖR VI")
        axios
            .post("/api/posts/add", {
                title: title,
                content: content,
                author: user.given_name ? user.given_name : user.nickname,
                image: user.picture,
            })
            .then((response) => {
                console.log("Blog post submitted successfully:", response.data)
            })
            .catch((error) => {
                console.error("Error submitting blog post:", error)
            })
    }

    return (
        <div className="blogpostform">
            <form onSubmit={handleSubmit}>
                <label>
                    Title:
                    <input
                        type="text"
                        value={title}
                        onChange={(event) => setTitle(event.target.value)}
                    />
                </label>
                <label>
                    Content:
                    <textarea
                        value={content}
                        onChange={(event) => setContent(event.target.value)}
                        className="content"
                    />
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default BlogPostForm
