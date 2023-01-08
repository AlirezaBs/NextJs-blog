import Image from "next/image"
import { Post } from "../typing"
import urlFor from "../lib/urlFor"

type Props = {
   posts: Post[]
}

function BlogList({ posts }: Props) {
   return (
      <div>
         <hr className="border-[#768791] mb-10" />

         <div className="grid grid-cols-1 md:grid-cols-2 px-10 gap-10 gap-y-16 pb-24">
            {posts.map((post) => (
               <div
                  key={post._id}
                  className="flex flex-col group cursor-pointer"
               >
                  <div className="relative w-full h-80 drop-shadow-xl group-hover:scale-105 transition-transform duration-200 ease-out">
                     <Image
                        className="object-cover object-left lg:object-center"
                        src={urlFor(post.mainImage).url()}
                        alt={post.author.name}
                        fill
                     />

                     <div className="flex justify-between absolute bottom-0 w-full bg-opacity-60 bg-black drop-shadow-lg text-white p-5">
                        <div>
                           <p className="font-bold">{post.title}</p>
                           <p>
                              {new Date(post._createdAt).toLocaleDateString(
                                 "en-US",
                                 {
                                    day: "numeric",
                                    month: "long",
                                    year: "numeric",
                                 }
                              )}
                           </p>
                        </div>

                        <div className="flex flex-col md:flex-row gap-y-2 md:gap-x-2 items-center">
                           {post.categories.map((category) => (
                              <div
                                 key={category._id}
                                 className="bg-[#dbdbdb] text-center text-black px-3 py-1 rounded-full text-sm font-semibold"
                              >
                                 <p>{category.title}</p>
                              </div>
                           ))}
                        </div>
                     </div>
                  </div>
               </div>
            ))}
         </div>
      </div>
   )
}

export default BlogList
