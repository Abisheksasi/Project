import { MdKeyboardArrowRight } from "react-icons/md"; 
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function House(){
    return(
        <Container className="mt-5 Housing">
        <Row className="House">
        <Col lg={6}>
        <div className="House-container partners rounded House1 mt-3">
          <h1 className="ms-3">Partner With Us</h1>
          <p className="ms-3 w-75">At amber, we offer seamless booking process and a robust sales support.</p>
           <button className="ms-3 pt-1 pb-1 ps-2 pe-2 border-0 rounded">Partner With Us <MdKeyboardArrowRight className="house-icon"/></button>
           </div>
        </Col>
        <Col lg={6}>
        <div className="House-container list rounded House2 mt-3">
          <h1 className="ms-3">List With Us</h1>
          <p className="ms-3">List your properties efficiently with amber.</p>
          <button className="ms-3 pt-1 pb-1 ps-2 pe-2 border-0 rounded">List Properties <MdKeyboardArrowRight className="house-icon"/></button>
          </div>
        </Col>
        </Row>
      </Container>
  
    )
}
export default House;         