import {
    Card,
    CardBody,
    CardText,
    CardHeader
  } from "reactstrap";

export default function Video(){
    return(
        <Card className = "card border-black bg-romantic">
            <CardHeader className = "h6 text-black text-center bg-brandy-rose">YouTube Video</CardHeader>
            <CardBody color = "romantic">
                <CardText className = "p text-dark-boi">
                    YouTube video would go here.
                </CardText>
            </CardBody>
        </Card>
    )
}