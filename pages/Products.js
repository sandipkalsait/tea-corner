import Image from 'next/image'
import styles from  './../styles/Home.module.css'
import Product from './componets/Product';

function Products() {

    return ( 


        <>
          <h3 className={styles.secheader}>Special menu for you</h3>
          <div className={styles.grid}>
         
         
          <Product url="/img_product.png" Title="Sandwich&rarr;" dis="bread with vegetables" />
          <Product url="/img_product-1.png" Title="Coffe Ice Cream&rarr;" dis="Coffe with ice cream vanilla" />
          <Product url="/img_product-2.png" Title="Cappucino&rarr;" dis="Hot Cappucino" />

          <Product url="/img_product-3.png" Title="Moccacinno&rarr;" dis="Hot Moccacino" />
          <Product url="/img_product-4.png" Title="Waffle Ice Crem&rarr;" dis="Wafle with Ice cream" />
          <Product url="/img_product-5.png" Title="Hot Milk&rarr;" dis="Hot Milk with less sugar" />





          {/* <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Coffe Ice Cream &rarr;</h2>
            <center><Image src='/Products/img_product-1.png' width={150} height={150} /></center> 
            <p>Coffe with ice cream vanilla</p>
          </a>
          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Cappucino &rarr;</h2>
            <center><Image src='/Products/img_product-2.png' width={150} height={150} /></center> 
            <p>Hot Cappucino</p>
          </a>
          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Moccacinno &rarr;</h2>
            <center><Image src='/Products/img_product-3.png' width={150} height={150} /></center> 
            <p>Hot Moccacino </p>
          </a>
          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Waffle Ice Crem &rarr;</h2>
            <center><Image src='/Products/img_product-4.png' width={150} height={150} /></center> 
            <p>Wafle with Ice cream</p>
          </a>
          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Hot Milk &rarr;</h2>
            <center><Image src='/Products/img_product-5.png' width={150} height={150} /></center> 
            <p>Hot Milk with less sugar</p>
          </a> */}

       


         
        </div>
        
        
        </>
     );
}

export default Products;