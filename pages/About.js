import Image from 'next/image'
import styles from  './../styles/Home.module.css'
import { Col, Row } from 'react-bootstrap';

function About() {
    return ( 

        <>
         <div className={styles.about}>

            <Row >
                <Col > 
                <center>
                    <div className={styles.cImage}>
                        <Image className={styles.aboutImage} src='/Sec-Coffee.png' width={250} height={400}/>
                    </div>
                </center>
                
                </Col>
                <Col>
                
                    <h3>
                    About us
                    </h3>

                    <h4>We provide quality <span>Tea</span>, and ready to delivery.</h4>    
                    <p>
                    We are a company that makes and distributes delicious drinks. <br/>
                    our main product is made with a secret recipe and available in stores worldwide.
                    </p>
                    <button className={styles.startbtn}>Get Your Tea</button>
                </Col>
            </Row>


         </div>
         
        </>

     );
}

export default About;