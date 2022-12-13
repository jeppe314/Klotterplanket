import React, { useState } from "react"
import axios from "axios"
import { useUser } from "@auth0/nextjs-auth0/client"

const BlogPostForm = () => {
    const { user } = useUser()
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log("NU KÖR VI")

        // You can add code here to submit the blog post to a server or database.
        // For the purposes of this example, we will just log the values to the console.
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
