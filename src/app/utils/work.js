"use client"

import React, {useEffect} from 'react'
import styles from './work.module.css'
import AOS from "aos";
import "aos/dist/aos.css";

function Work(props) {

    const info = props.info;

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);


    return (
        <div className={styles.workexperienceContainer} > 
            <div className={styles.workexperiencePlacement}>
                {props.position}
                <span>{props.date}</span>
            </div>
            <div className={styles.workexperienceInfo}>
                <ul>
                    {info.map((element, index) => (
                        <li data-aos="fade-right" key={index}>{element}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Work