import '@styles/globals.css'
import MetaNavBar from '@components/MetaNavBar'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'

export const metadata = {
    title: "IEEE Canada",
    description: "IEEE Canada provides a high quality general interest magazine, a technical journal, an electronic newsletter, an annual conference, and web services designed for all IEEE Canada members, as well as support for our volunteer network of local Sections, Chapters, and Student Branches."
}

const RootLayout = ({children}) => {
  return (
    <html lang="en">
    <body>
          <MetaNavBar/>
          <NavBar/>
        <main className="app">
            {children}
        </main>
        <Footer/>
    </body>
    </html>
  )
}

export default RootLayout