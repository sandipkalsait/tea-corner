
import Image from 'next/image'
import styles from './../styles/Home.module.css'
import {Col,Row} from 'react-bootstrap'

function Contact() {


    return (

        <>
            <div className={styles.Contact}>
                <Row>
                <Col>
                <center className={styles.clogo}>
                    <Image  src='/logo_tea.png' width={150} height={100}/>
                </center>
                </Col>
                <Col>
                <center>
                    <h3 className={styles.subtext}>
                        Subscribe to get 50% discount price
                    </h3>
                    <form className={styles.subscribe}>
                        <input type="email" placeholder="Enter Email Address !" />
                        <button  type="subscribe">Subscribe</button>
                       

                    </form>

                </center>
                </Col>
                </Row>
               


            </div>

        </>
    );
}

export default Contact;