import React from "react";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardImg,
  CardTitle,
} from "react-bootstrap";
import "./Card.css";
import { Link } from "react-router-dom";

const CardComponent = ({ title, src }) => {
  return (
    <Card>  
      <CardBody>
        <CardTitle>{title}</CardTitle>
        <CardImg variant="top" src={src} />
      </CardBody>
      <CardFooter>
        <Link
          className="btn btn-warning link"
          target="_blank"
          to={`https://wa.me/5493364511862/?text=Me gustaria recibir mas informacion sobre: ${title}`}
        >
          Consultar
        </Link>
      </CardFooter>
    </Card>
  );
};

export default CardComponent;
