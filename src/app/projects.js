import React from 'react'
import styles from './projects.module.css'
import ProjectCard from './utils/project-card'

function Projects() {

  const sportsHubTags = ["Android Studio", "Firebase", "Java"]
  const sportsHubDesc = "SportsHub is your ultimate destination for sports enthusiasts and venue owners alike. Developed using Android Studio and powered by Firebase, this innovative app seamlessly connects people with sports events and venues across various locations."
  
  const christmasDeliveryTags = ["Unity", "C#"]
  const christmasDeliveryDesc = `Prepare yourself for a festive and heartwarming experience like no other in "Christmas Delivery". Assume the role of the renowned Santa Claus and partake in the noble task of delivering precious gifts to eager children while evading mischievous enemies intent on dampening the holiday spirit`
  
  const EasySplitTags = ["MongoDB", "Express", "JavaScript", "CSS", "HTML", "NextJs/React", "NodeJs"]
  const EasySplitDesc = "Introducing Easy-Split, a smart and user-friendly app designed to help you keep track of borrowed money and debts with ease. In today's world, where dealing with finances among friends and family can get complicated, Easy-Split is your go-to tool to make it all simpler."
  
  const DiscordTags = ["Python"]
  const DiscordDesc = "Introducing Discord Auto Reply, the essential tool for enhancing your Discord experience. Tired of missing messages or struggling to respond promptly to your server members? This handy app has got you covered, allowing you to automate replies, engage your community, and keep your Discord server active even when you're away"
  return (
    <div className={styles.projects} id="projects">
        <h3>
            Projects
        </h3>
        <ProjectCard tags={sportsHubTags} link="https://github.com/rd4cake/Android-Sports-App" img="/sportshub.png" desc={sportsHubDesc} title="SportsHub"/>
        <ProjectCard tags={christmasDeliveryTags} link="https://github.com/rd4cake/ChristmasDelivery" img="/christmasdelivery.png" desc={christmasDeliveryDesc} title="Christmas Delivery"/>
        <ProjectCard tags={EasySplitTags} link="https://github.com/rd4cake/Easy-Split" img="/easysplit.png" desc={EasySplitDesc} title="Easy-Split"/>
        <ProjectCard tags={DiscordTags} link="https://github.com/rd4cake/Easy-Split" img="/discord.png" desc={DiscordDesc} title="Discord Auto Reply"/>
    </div>
  )
}

export default Projects