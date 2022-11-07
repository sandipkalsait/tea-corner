import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './componets/Layout';
import styles from '../styles/Home.module.css'



function MyApp({ Component, pageProps }) {
    return (
        <div className={styles.container}>
               
            <Layout>
                <Component {...pageProps} />
            </Layout>
           
        </div>


    );

}

export default MyApp
