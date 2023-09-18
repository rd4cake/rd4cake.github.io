"use client"

import React from 'react'
import styles from './navbar.module.css'

function Navbar() {

    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        section.scrollIntoView({ behavior: 'smooth' });
    };


    return (
        <div className={styles.navbar}>
            <div className={styles.navbarContainer}>
                    <div onClick={() => scrollToSection('workexperience')}>
                        <a >Work Experience</a>
                    </div>
                    <div onClick={() => scrollToSection('projects')}>
                        <a >Projects</a>
                    </div>
                <div><a href="mailto:denny.wang@mail.utoronto.ca">Contact</a></div>
            </div>
        </div>

    )
}

export default Navbar