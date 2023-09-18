"use client"

import React, {useEffect} from 'react'
import styles from './project-card.module.css'
import Image from 'next/image'
import ProjectTag from './project-tags.js'
import AOS from "aos";
import "aos/dist/aos.css";


function ProjectCard(props) {

    const tags = props.tags;

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    return (
        <div className={styles.projectcard}>
            <div className={styles.projectcardImg} data-aos="fade-right">
                <Image
                    src={props.img}
                    width={100}
                    height={100}
                    style={{ position: "relative", width: "100%", height: "100%", borderRadius: "25px" }}
                    unoptimized={true}
                    priority
                />
            </div>

            <div className={styles.projectcardInfo} data-aos="fade-left">

                <div>
                    <div className={styles.projectcardTitle}>
                        <p>
                            {props.title}
                        </p>
                    </div>
                    <div className={styles.projectcardDesc}>
                        <p>
                        {props.desc}
                        </p>
                    </div>

                    <div className={styles.projectcardSkills}>
                        {tags.map((element, index) => (
                            <ProjectTag key={index} item={element} />
                        ))}
                    </div>
                </div>

                <a target="_blank" href={props.link}> 
                    <div className={styles.projectcardGithub}>
                        <div className={styles.projectcardGithubLogo}>
                            <Image
                                src="/github.svg"
                                width={100}
                                height={100}
                                style={{ position: "relative", width: "100%", height: "100%", borderRadius: "25px" }}
                            />
                        </div>
                        <p>
                            Code
                        </p>
                    </div>
                </a>
            </div>
        </div>
    )
}

export default ProjectCard