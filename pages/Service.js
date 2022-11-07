import Image from 'next/image'
import { Col, Row } from 'react-bootstrap';
import styles from './../styles/Home.module.css'
function Services() {
    return (

        <>
            <h4 className={styles.secheader}>How to use delivery service</h4>
            <Row >
                <Col className={styles.card2}>

                    {/* <h2>Documentation &rarr;</h2> */}
                    <center><Image src='/Step-1.png' width={150} height={150} />
                    {/* <p>Find in-depth information about Next.js features and API.</p> */}
                    <h5>Chose your Product</h5>
                    <h6>How to use delivery service</h6>
                    </center>

                </Col>

                <Col className={styles.card2}>

                    {/* <h2>Documentation &rarr;</h2> */}
                    <center><Image src='/Step-2.png' width={150} height={150} />
                    <h5>We delivery it to you </h5>
                    <h6>Choose delivery service</h6>
                    </center>
                    {/* <p>Find in-depth information about Next.js features and API.</p> */}
                   

                </Col>

                <Col className={styles.card2}>

                    {/* <h2>Documentation &rarr;</h2> */}
                    <center><Image src='/Step-3.png' width={150} height={150} />
                    <h5>Enjoy your Tea</h5>
                    <h6>Choose delivery service</h6>
                    </center>
                    {/* <p>Find in-depth information about Next.js features and API.</p> */}
                    

                </Col>
            </Row>

        </>
    );
}

export default Services;