import React from 'react'
import styles from "./header.module.css"
import { Link as JLink } from '@mui/joy'

function Header() {
  return (
    <div className={`${styles.andreahCol} border-b border-gray-800 flex justify-between`}>
        <div className={`${styles.andreahNav} flex justify-center font-bold`}><p className={styles.andreahP}>ANDREAH</p></div>
        <div className={`${styles.andreahNav} flex justify-center font-bold`}>
            <div><JLink color='plain'>ABOUT</JLink></div>
            <div><JLink color='plain'>EVENTS</JLink></div>
            <div><JLink color='plain'>ALBUMS</JLink></div>
            <div><JLink color='plain'>BLOG</JLink></div>
            <div><JLink color='plain'>CONTACT</JLink></div>
        </div>
    </div>
  )
}

export default Header