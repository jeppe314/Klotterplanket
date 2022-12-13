import { Header } from "../components/Header"
import { BlogPosts } from "../components/BlogPosts"
import BlogPostForm from "../components/BlogPostForm"
import { useUser } from "@auth0/nextjs-auth0/client"
export default function Home() {
    const { user } = useUser()
    return (
        <div className="container">
            <Header />
            <div className="blog">
                <BlogPosts />
                {user && <BlogPostForm />}
            </div>
        </div>
    )
}
