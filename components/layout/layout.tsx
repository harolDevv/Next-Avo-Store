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
    </div>
  )
}

export default Layout