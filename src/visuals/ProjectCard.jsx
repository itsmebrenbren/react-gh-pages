import React, { useState } from "react";
import {
    Card,
    Collapse,
    CardSubtitle,
    CardBody,
    CardHeader
  } from "reactstrap";
import Button from "./Button";

export default function ProjectCard(props){

    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return(
            <Card className = "my-2 card border-black bg-romantic">
                <CardHeader onClick = { toggle } className = "h6 text-black text-center bg-brandy-rose">{ props.title }</CardHeader>
                <Collapse isOpen = { isOpen }>
                    <CardBody color = "romantic">
                        <CardSubtitle className = "p text-dark-boi text-center">{ props.subtitle }</CardSubtitle>
                            <img src = { props.img } className = "img-fluid rounded max-height-200px" alt = { props.alt }/>
                        <Button>{ props.button }</Button>
                    <Button>ReadMe</Button>
                </CardBody>
                </Collapse>
            </Card>
    )
}
