import Avocado from '@components/SVGicons/Avocado'
import Link from 'node_modules/next/link'
import React from 'react'


import styles from './Navbar.module.scss'
import ShoppingCartIcon from './ShoppingCartIcon'
import { useCart } from '../../store/Cart'


const Navbar = () => {
  const { count: cartCount } = useCart()
  return (
        <nav className={styles.nav}>
            <menu>
              <Link href='/'>
                <div className={styles.AvoStore_container}>
                  <Avocado size='45px'/>
                  <span>Avo Store</span>
                </div>
              </Link>
               <ShoppingCartIcon cartCount={cartCount} name='Canasta'/>
            </menu>
        </nav>
  )
}

export default Navbar