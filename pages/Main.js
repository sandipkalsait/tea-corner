import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from '../styles/Home.module.css'
import Image from 'next/image';
// import Button from 'react-bootstrap/esm/Button';


function Main() {
    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <h1 className={styles.title}>
                            Enjoy your <a href="#">Tea </a>
                            before your activity
                        </h1>

                        <p className={styles.description}>

                            {/* <code className={styles.code}> */}
                            Boost your productivity and build <br></br>your mood with a glass of coffee in the morning
                            {/* </code> */}

                            <button className={styles.startbtn} >Order Now</button> <a className={styles.moretext}  href='#'>See More</a> 

                        </p>



                    </Col>
                    <Col>
                        <center>
                            <div className={styles.circle}>
                                <Image src='/tea-sec.png' width={300} height={300} />

                            </div>
                        </center>

                    </Col>
                </Row>
            </Container>

        </>
    );
}

export default Main;