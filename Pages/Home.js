import React, { Component } from 'react'
import CarouselBox from '../Components/CarouselBox'
import { Container, CardDeck, Card, Button } from 'react-bootstrap';

export default class Home extends Component {
    render() {
        return (
            <>
                <CarouselBox />
                <Container>
                    <h2 className="text-center m-4">Our team</h2>
                    <CardDeck className="m-4">
                        <Card bg="info" border="info" text="dark">
                            <Card.Img variant="top" src="https://images.freeimages.com/images/small-previews/3fc/diversity-2-1184116.jpg" />
                            <Card.Body>
                                <Card.Title>Developers</Card.Title>
                                <Card.Text>
                                A developer is an individual that builds and create software and applications. He or she writes, debugs and executes the source code of a software application. 
                                A developer is also known as a software developer, computer programmer, programmer, software coder or software engineer.
                            </Card.Text>
                                <Button variant="primary">About team</Button>
                            </Card.Body>
                        </Card>
                        <Card bg="danger" border="danger">
                            <Card.Body>
                                <Card.Title>Desiners</Card.Title>
                                <Card.Text>
                                A designer is a person who makes designs for objects. ... More formally, a designer is an agent that "specifies the structural properties of a design object". 
                                In practice, anyone who creates tangible or intangible objects, products, processes, laws, games, graphics, services, and experiences is referred to as a designer.
                        </Card.Text>
                                <Button variant="primary">About team</Button>
                            </Card.Body>
                            <Card.Img variant="bottom" src="https://www.cybersecurity-insiders.com/wp-content/uploads/2017/07/Team.png" />
                        </Card>
                        <Card bg="warning" border="warning">
                            <Card.Img variant="top" src="https://support.content.office.net/ru-ru/media/461a7a87-5e61-4318-8642-8a84df7b498d.jpg" />
                            <Card.Body>
                                <Card.Title>HR team</Card.Title>
                                <Card.Text>
                                The HR Team is the “one source alternative” to maintaining an in-house human resources department. The HR Team can customize a human resources solution based on the exact needs of your company or organization. 
                                Our staff of seasoned human resources professionals work directly with you to deliver top tier HR services.
                    </Card.Text>
                                <Button variant="primary">About team</Button>
                            </Card.Body>
                        </Card>
                    </CardDeck>
                </Container>
            </>
        )
    }
}
