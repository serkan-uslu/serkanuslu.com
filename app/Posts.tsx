export default function Posts({ posts }) {
  return (
    <>
      <h4 className="mb-4 text-center text-xl font-semibold md:text-left">Last Posts</h4>
      <div className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-3">
        {posts.map((post, index) => (
          <div key={index} className="rounded-lg border border-gray-200 p-4">
            <h3 className="text-md line-clamp-1 font-semibold">{post.title}</h3>
            <p className="text-sm text-gray-500">{post.date}</p>
            <p className="mb-4 text-sm">{post.description}</p>
            <a
              href={post.link}
              target="_blank"
              className="text-sm font-bold text-pink-500 hover:text-pink-600"
            >
              Read more...
            </a>
          </div>
        ))}
      </div>
    </>
  )
}
