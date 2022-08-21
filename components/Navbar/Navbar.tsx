import Avocado from '@components/SVGicons/Avocado'
import Link from 'next/link'
import React from 'react'


import styles from './Navbar.module.scss'
import ShoppingCartIcon from './ShoppingCartIcon'


const Navbar = () => {
  return (
        <nav className={styles.nav}>
            <menu>
              <div className={styles.AvoStore_container}>
                <Avocado size='45px'/>
                <span>Avo Store</span>
              </div>
               <ShoppingCartIcon/>
            </menu>
        </nav>
  )
}

export default Navbar