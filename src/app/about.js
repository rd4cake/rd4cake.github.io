"use client"

import React, {useEffect} from 'react'
import styles from './about.module.css'
import AOS from "aos";
import "aos/dist/aos.css";

function About() {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);


  return (
    <div className={styles.about}>
        <div className={styles.aboutContainer}> 
            <p data-aos="fade-up">
                My name is Denny Wang and I am a second-year student studying at the 
                University of Toronto Scarborough specializing in Computer Science. I am motivated and 
                eager to learn more in the field of software development and will be 
                willing to take on any challenges during this pursuit.
            </p>      
        </div>
    </div>
  )
}

export default About