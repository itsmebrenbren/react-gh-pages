import {
    Card,
    CardBody,
    CardText,
    CardHeader
  } from "reactstrap";
import Pic from '../Images/PortfolioPic1.jpg';

export default function AboutMe(){
    return(
        <Card className = "card border-black bg-romantic">
            <CardHeader className = "h6 text-black text-center bg-brandy-rose">About Me</CardHeader>
            <CardBody>
                <img src = { Pic } className = "img-fluid rounded float-start" alt = "a women smiling"></img>
                <CardText className = "p text-dark-boi">
                    I am a passionate software engineer who embarked on a transformative journey 
                    into the world of technology through MIT's XPRO coding bootcamp.
                    With a strong foundation in the essentials of programming and a zeal for continuous learning, 
                    I am eager to contribute my skills to creating innovative and impactful solutions.
                    As I continue to grow in my software engineering journey, 
                    I am excited to embrace new challenges, expand my skill set, 
                    and contribute my enthusiasm and determination to projects that make a difference. 
                    I am eager to contribute my fresh perspectives and innovative ideas to a team that values creativity, 
                    collaboration, and continuous improvement.
                </CardText>
            </CardBody>
        </Card>
    )
}