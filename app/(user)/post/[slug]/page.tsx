import { groq } from "next-sanity"
import Image from "next/image"
import { client } from "../../../../lib/sanity.client"
import urlFor from "../../../../lib/urlFor"

type Props = {
   params: {
      slug: string
   }
}

export default async function Post({ params: { slug } }: Props) {
   const query = groq`
    *[_type=='post' && slug.current == $slug][0]
    {
      ...,
      author->,
      categories[]->
    }
  `

   const post: Post = await client.fetch(query, { slug })

   return (
      <article className="px-10 pb-28">
         <section className="space-y-2 border border-[#43afe9] text-white">
            <div className="relative min-h-56 flex flex-col md:flex-row justify-between w-full h-full">
               <div className="absolute top-0 w-full h-full">
                  <Image
                     className="object-cover object-center mx-auto opacity-20 blur-sm"
                     src={urlFor(post.mainImage).url()}
                     alt={post.author.name}
                     fill
                  />
               </div>

               <section className="p-5 bg-[#0077b5] w-full">
                  <div className="flex flex-col md:flex-row justify-between gap-y-5 items-start">
                     <div>
                        <h1 className="text-2xl font-extrabold pb-5">
                           {post.title}
                        </h1>
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
                     <div className="flex flex-row items-center justify-end gap-3">
                        <div className="flex items-center space-x-2">
                           <Image
                              className="rounded-full"
                              src={urlFor(post.author.image).url()}
                              alt={post.author.name}
                              height={40}
                              width={40}
                           />
                        </div>
                        <div>
                           <h3 className="text-lg font-bold">
                              {post.author.name}
                           </h3>
                           <div>{/* author bio */}</div>
                        </div>
                     </div>
                  </div>
                  <div className="flex flex-col md:flex-row mt-10 gap-5 items-center">
                    <h2 className="italic">{post.description}</h2>
                     <div className="flex items-center justify-end mt-auto space-x-2">
                        {post.categories.map((category: any) => (
                           <p
                              key={category._id}
                              className="bg-gray-800 text-white px-[1rem] py-[0.40rem] rounded-full text-sm font-semibold mt-4"
                           >
                              {category.title}
                           </p>
                        ))}
                     </div>
                  </div>
               </section>
            </div>
         </section>
      </article>
   )
}
