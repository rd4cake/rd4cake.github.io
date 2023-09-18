import React from 'react'
import styles from './project-tag.module.css'

function ProjectTag(props) {
  return (
    <div className={styles.projecttag}>
        {props.item}
    </div>
  )
}

export default ProjectTag