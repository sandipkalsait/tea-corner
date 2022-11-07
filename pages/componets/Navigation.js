import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {BsSearch}from 'react-icons/bs'
import Image from 'next/image';
import styles from './../../styles/Home.module.css';

function Navigation() {
  return (
    <Navbar className={styles.Navbar}>
      <Container>
        <Navbar.Brand href="#Home">
          {/* Tea Corner */}
          <Image src="/logo_tea.png" alt="Vercel Logo" width={40} height={25} />
          <Image src="/Logo_name.png" alt="Vercel Logo" width={90} height={25} />
        
        </Navbar.Brand>

        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">

            <Nav className="justify-content-end">
                <Nav.Link className={styles.Navlink} href="#About">About Us </Nav.Link>
                <Nav.Link className={styles.Navlink} href="#Products">Our Products </Nav.Link>
                <Nav.Link className={styles.Navlink} href="#Service"> Delivery </Nav.Link>
                {/* <Nav.Link href="#pricing">Contact</Nav.Link> */}
            </Nav>

            <form>
            <button type="submit">Search</button>
            <input type="search" placeholder="Search..."/>
          
            </form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;