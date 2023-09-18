import React from 'react'
import styles from './workexperience.module.css'
import Work from './utils/work.js';


function WorkExperience() {

    const HealthCanada = [
        "Created a user-friendly web application that enables easy data filtering and visualization, empowering the company to extract meaningful insights and make informed decisions.",
        "Leveraged PostgreSQL for efficient import and export operations of laboratory samples, ensuring data integrity and reliability.",
        "Proficiently employed SQL to perform advanced data analysis by joining sample tables and crafting intricate queries, enhancing decision-making processes.",
        "Developed the backend infrastructure of projects using Django, an industry-standard Python framework, to create robust and scalable web applications.",
        "Utilized a stack of HTML, CSS, and JavaScript to design and implement intuitive and responsive user interfaces, enhancing the overall user experience.",
        "Significantly improved database query performance by identifying and resolving critical bugs, resulting in a 2x increase in query speed, enhancing overall system efficiency."
    ];

    return (
        <div className={styles.workexperience} id="workexperience">
            <h3>
                Work Experience
            </h3>

            <Work info={HealthCanada} date="January 2023 - June 2023" position="Junior Software Engineer - Health Canada"/>     
        </div>
    )
}

export default WorkExperience