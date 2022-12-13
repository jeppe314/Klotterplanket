import { Header } from "../components/Header"
import { BlogPosts } from "../components/BlogPosts"
import BlogPostForm from "../components/BlogPostForm"
import { useUser } from "@auth0/nextjs-auth0/client"
import Post from "../models/postModel"
import connectMongo from "../utils/connectMongo"

export default function Home({ posts }) {
    const { user } = useUser()
    console.log(user)

    return (
        <div className="container">
            <Header />
            <div className="blog">
                <BlogPosts posts={posts} />
                {user && <BlogPostForm />}
            </div>
        </div>
    )
}

export const getServerSideProps = async () => {
    try {
        await connectMongo()
        const posts = await Post.find()

        return {
            props: {
                posts: JSON.parse(JSON.stringify(posts)),
            },
        }
    } catch (error) {
        console.log(error)
    }
}
