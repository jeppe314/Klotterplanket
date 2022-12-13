import { User } from "@auth0/auth0-react"
import Image from "next/image"
import React from "react"

export const BlogPost = ({ title, content, author, image }) => {
    return (
        <div className="post">
            <div className="post-header">
                <div className="post-title">
                    <h2>{title}</h2>
                </div>
                <div className="post-author">
                    <h3>{author}</h3>
                    {image && (
                        <Image
                            src={image}
                            alt="authorguy"
                            width={50}
                            height={50}
                        />
                    )}
                </div>
            </div>
            <p>{content}</p>
            {/* <p>{author}</p> */}
        </div>
    )
}
