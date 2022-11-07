import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Row,Col} from 'react-bootstrap';
import {FiShoppingCart} from 'react-icons/fi'

function Product(props) {
  console.log(props);
  return (
    <Card style={{ width: '16rem', margin:'2rem',padding:"10px" ,background:'#FFCB7C' }}>
      <Card.Img  variant="top" src={'/Products/'+props.url} />
      <Card.Body>
        <Card.Title>{props.Title}</Card.Title>

        <Row>
        <Col>
        <Card.Text style={{padding:"2px", margin:'.1rem' }} >
          {props.dis}

        </Card.Text>
        </Col>
       
       <Button  style={{padding:"2px", margin:'.1rem' }} variant="primary" outline> Order &nbsp;&nbsp;&nbsp;<FiShoppingCart /></Button>

       
        </Row>
        
      </Card.Body>
    </Card>
  );
}

export default Product;