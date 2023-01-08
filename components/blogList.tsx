import { Post } from "../typing"

type Props = {
    posts: Post[]
}

function BlogList({posts}: Props) {
  console.log(posts.length)
  return (
    <div>blogList</div>
  )
}

export default BlogList