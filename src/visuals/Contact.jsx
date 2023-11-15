import {
    Card,
    CardSubtitle,
    CardBody,
    CardText,
    CardHeader,
    UncontrolledCollapse,
    Input,
    Label,
    Col
  } from "reactstrap";
  import Button from "./Button";

export default function Contact(){
    return(
        <Col>
            <Card className = "card border-black bg-romantic">
                <CardHeader className = "h6 text-black text-center bg-brandy-rose">Contact</CardHeader>
                <CardBody color = "romantic">
                    <CardSubtitle>Get in touch with me</CardSubtitle>
                    <Button>write me a note</Button>
                    <Button>LinkedIn</Button>
                    <Button>GitHub</Button>
                </CardBody>
            </Card>
        </Col>
    )
}