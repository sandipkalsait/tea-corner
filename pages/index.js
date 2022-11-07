
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import About from './About'
import Contact from './Contact'
import Main from './Main'
import Products from './Products'
import Services from './Service'


export default function Home() {
  return (
    <div className={styles.container}>
     

      <main className={styles.main}>
       
      
        <Main className="Home"/>
        <Services className="Service"/>
        <About className="About"/>
        <Products className="Products"/>
        <Contact className="Contact"/>


      
      </main>

     
    </div>
  )
}
