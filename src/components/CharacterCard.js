import React from "react";
import {Card, CardImg, CardBody, Col} from "reactstrap";




const radius = {
  borderRadius: "15px",
}


export default function CharacterCard(props) {
  return (
    <Col sm="6">
      <div className="another">
    <Card  className="container">
    
      <div className="solid">
        
      <CardImg className="img" style={radius} src={props.image} alt="Card image cap" />
      <CardBody className="secContainer">  
      <p>Name: {props.name} </p>
      <p> Location: {props.location} </p>
      <p> Status: {props.status} </p>
      </CardBody>
      </div>
      
    </Card>
    </div>
    </Col>

  
    )
}