import { ReactNode } from 'react'
import './globals.css'
import { Bai_Jamjuree, Roboto_Flex  } from 'next/font/google'
import { Hero } from '@/components/Hero'
import { Profile } from '@/components/Profile'
import { SignIn } from '@/components/SignIn'
import { Copyright } from '@/components/Copyright'
import { cookies } from 'next/headers'

const BaiJamjuree = Bai_Jamjuree({
  subsets: ['latin'],
  weight: '700',
  variable: '--font-bai-jamjuree'
})

const roboto = Roboto_Flex({ subsets: ['latin'], variable: '--font-roboto'})



export default function RootLayout({ children }: { children: ReactNode }) {
  const isAuthenticated = cookies().has('token')


    return (
    <html lang="en">
      <body className={`${roboto.variable} ${BaiJamjuree.variable} font-sans bg-gray-900 text-gray-100`}>


        <main className="grid min-h-screen grid-cols-2">
      {/*  left */}
      <div className="relative flex flex-col items-start justify-between overflow-hidden border-r border-white/10 px-28 py-16  bg-[url(../assets/bg-start.svg)] bg-cover">
       
       {/*  blur */}
       <div className="absolute right-0 top-1/2 h-[288px] w-[526px] -translate-y-1/2 translate-x-1/2 rounded-full bg-purple-700 opacity-50 blur-full" />
      
        {/* stripes */}
        <div className="absolute right-2 top-0 bottom-0 w-2 bg-stripes" />


       {isAuthenticated ? <Profile /> : <SignIn />}
         <Hero />
        <Copyright />

      </div>

    {/*  page side right as páginas criadas são rendereizadas no objeto children*/}
     <div className="flex flex-col max-h-screen overflow-y-scroll bg-[url(../assets/bg-start.svg)] bg-cover p-8">
    {children}
      </div>  
    </main>
      </body>
    </html>
  )
}
