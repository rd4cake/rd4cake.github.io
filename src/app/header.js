"use client"

import React from 'react'
import Background from './utils/header-background.js'
import Image from 'next/image.js'
import styles from './header.module.css'

function header() {
  return (
    
    <div className={styles.header}>
      <Background></Background>

      <div className={styles.headerTextContainer}>
        <h1>Hi, I'm</h1>
        <h2>Denny</h2>
      </div>

      <div className={styles.headerIconContainer}>
        <a target="_blank" href='https://github.com/rd4cake'>
          <Image
            src='/github_w.svg'
            width={100}
            height={100}
            style={{ position: "relative", width: "64", height: "64", fill: "white" }}
            unoptimized={true}
            priority
          />
        </a>
        <a target="_blank" href='https://www.linkedin.com/in/denny-wang-2b7854201/?originalSubdomain=ca'>
          <Image
            src='/linkedin.svg'
            width={100}
            height={100}
            style={{ position: "relative", width: "64", height: "64" }}
            unoptimized={true}
            priority
          />
        </a>
      </div>
    </div>
  )
}

export default header