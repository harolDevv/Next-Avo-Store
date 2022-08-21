import Avocado from '@components/SVGicons/Avocado'
import React from 'react'
import styles from './Kawai.module.scss'

const KawaiHeader = () => {
  return (
    <div className={styles.KawaiHeader_container}>
        <div className={styles.KawaiHeader_icon} >
            <span>AVO</span>
            <Avocado size='70px'/>
            <span>STORE</span>
        </div>
    </div>
  )
}

export default KawaiHeader