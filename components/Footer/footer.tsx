import React from 'react'
import styles from './footer.module.scss'

import {TbBrandNextjs} from 'react-icons/tb'

import {FaSass} from 'react-icons/fa'
import {AiFillLinkedin} from 'react-icons/ai'
import {AiOutlineGithub} from 'react-icons/ai'
import Link from 'node_modules/next/link'

const Footer = () => {
  return (
    <footer className={styles.footer} >
        <div className={styles.info_footer_container}>
        <p>Made by HarolDev with Next.js and Sass</p>
        <TbBrandNextjs/>
        <FaSass/>
        </div>
        <div className={styles.footer_icons_contact_container}>
            <a href='https://github.com/harolDevv' target="_blank">
                <AiOutlineGithub/>
            </a>
            <a href='https://www.linkedin.com/in/harold-full-stack/' target="_blank">
                <AiFillLinkedin/>
            </a>
        </div>
    </footer>
  )
}

export default Footer