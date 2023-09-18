import Header from './header.js'
import styles from './page.module.css'
import About from './about.js'
import WorkExperience from './workexperience.js'
import Projects from './projects.js'
import Navbar from './navbar.js'
import NavBarMobile from './navbarmobile.js'

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar/>
      <Header/>
      <About/>
      <WorkExperience/> 
      <Projects/>
      <NavBarMobile/>
    </main>
  )
}
