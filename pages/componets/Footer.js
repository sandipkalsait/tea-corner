import Image from 'next/image'
import styles from './../../styles/Home.module.css'
function Footer() {
    return ( 
        <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* Powered by{' '} */}
          <Image src="/logo_tea.png" alt="Vercel Logo" width={30} height={20} />
         
          {/* <span className={styles.logo}>
         
          </span> */}
          <Image src="/Logo_name.png" alt="Vercel Logo" width={70} height={20} />
        
        </a>
      </footer>
     );
}

export default Footer;