import Image from "next/image"
import { Post } from "../typing"
import urlFor from "../lib/urlFor"
import ClientSideRoute from "./clientSideRoute"
import { ArrowUpRightIcon } from "@heroicons/react/24/solid"

type Props = {
   posts: Post[]
}

function BlogList({ posts }: Props) {
   return (
      <div>
         <hr className="border-[#768791] mb-10" />

         <div className="grid grid-cols-1 md:grid-cols-2 px-10 gap-10 gap-y-16 pb-24">
            {posts.map((post) => (
               <ClientSideRoute route={`/post/${post.slug.current}`}>
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

                        <div className="flex justify-between absolute bottom-0 w-full bg-black/40 drop-shadow-lg text-white p-5">
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
                     <div className="mt-5 flex-1">
                        <p className="underline text-lg font-bold">
                           {post.title}
                        </p>
                        <p className="line-clamp-2 text-gray-500">
                           {post.description}
                        </p>
                     </div>
                     <p className="mt-5 font-bold text-base flex gap-2 items-center group-hover:underline group-hover:text-blue-600">
                        <span>Read Post</span>
                        <ArrowUpRightIcon className="w-4" />
                     </p>
                  </div>
               </ClientSideRoute>
            ))}
         </div>
      </div>
   )
}

export default BlogList
