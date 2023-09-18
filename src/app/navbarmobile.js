"use client"

import React, { useEffect, useState, useRef } from 'react'
import Image from 'next/image'
import styles from './navbarmovile.module.css'

function NavBarMobile() {

    const body = useRef(null);
    const [menu, setmenu] = useState(0)

    const update = () => {
        setmenu(menu === 0 ? 1 : 0);
    };


    const scrollToSection = (id) => {
        setmenu(menu === 0 ? 1 : 0);
        const section = document.getElementById(id);
        section.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        if (menu === 0) { //off
            body.current.classList.add(styles.navbarmobileBodyExpand);
        }
        else { //on
            body.current.classList.remove(styles.navbarmobileBodyExpand);
        }

    }, [menu])

    useEffect(() => {
        const handleScroll = () => {
            if (menu == 1) {
                setmenu(0)
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={styles.navbarmobile}>
            <div className={styles.navbarmobileHead}>
                <div onClick={update} className={styles.navbarmobileIcon}>
                    <Image
                        src='/mobile_menu.svg'
                        width={100}
                        height={100}
                        style={{ position: "relative", width: "100%", height: "100%" }}
                        unoptimized={true}
                        priority
                    />
                </div>
            </div>
            <div className={styles.navbarmobileBody} ref={body}>
                <p onClick={() => scrollToSection('workexperience')} href="">Work Experience</p>
                <p onClick={() => scrollToSection('projects')} href="">Projects</p>
            </div>
        </div>
    )
}

export default NavBarMobile