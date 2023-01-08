import "../../styles/globals.css"
import Header from "../../components/header"
import Banner from "../../components/banner"

export default function RootLayout({
   children,
}: {
   children: React.ReactNode
}) {
   return (
      <html>
         <body>
            <Header />
            <hr className="border-[#768791]" />
            <div className="max-w-7xl mx-auto">
               <Banner />
               {children}
            </div>
         </body>
      </html>
   )
}
