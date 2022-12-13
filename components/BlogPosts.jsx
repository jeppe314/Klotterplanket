import { BlogPost } from "./BlogPost"
import { nanoid } from "nanoid"

export const BlogPosts = ({ posts }) => {
    const blogpostsEl = posts
        .reverse()
        .map((post) => (
            <BlogPost
                key={nanoid()}
                title={post.title}
                content={post.content}
                author={post.author}
                image={post.image}
            />
        ))

    return <div className="blogposts">{blogpostsEl}</div>
}
