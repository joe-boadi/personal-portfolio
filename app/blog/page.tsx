import BlogPost from "./blog-post";

export default function Blog() {
    return (
        <div className="min-h-screen">
            <h1 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">My Blog</h1>
            <p className="text-zinc-600 dark:text-zinc-400">
                I write about personal growth, and my journey in software development and design.
            </p>
            <BlogPost />
        </div>
    )
}