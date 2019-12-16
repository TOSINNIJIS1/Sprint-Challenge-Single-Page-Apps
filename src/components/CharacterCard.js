import React from "react";
import {Card, CardImg, CardBody} from "reactstrap";

export default function CharacterCard(props) {
  console.log(props)
  return (
    <Card>
      <CardImg top width="20%" src={props.image} alt="Card image cap" />
      <CardBody>
      <p>Name: {props.name} </p>
      <p> Location: {props.location} </p>
      <p> Status: {props.status} </p>
      </CardBody>
    </Card>
    )
}