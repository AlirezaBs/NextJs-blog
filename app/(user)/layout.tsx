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
            <Banner />
            {children}
         </body>
      </html>
   )
}
