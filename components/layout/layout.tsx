import Footer from '@components/Footer/footer'
import Navbar from 'components/Navbar/Navbar'
import React from 'react'

type Props = {
    children: React.ReactNode
}
const Layout:React.FC<Props> = ({children}) => {
  return (
    <div>
        <Navbar/>
        {children}
        <Footer/>
    </div>
  )
}

export default Layout