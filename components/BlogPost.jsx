import React from "react"

export const BlogPost = ({ title, content, author }) => {
    return (
        <div className="post">
            <h2>{title}</h2>
            <p>{content}</p>
            {/* <p>{author}</p> */}
        </div>
    )
}
