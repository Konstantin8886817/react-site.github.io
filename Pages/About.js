import React, { Component } from 'react'
import { Container, Tab, Nav, Row, Col } from 'react-bootstrap'


export default class About extends Component {
    render() {
        return (
            <Container>
                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                    <Row>
                        <Col sm={3}>
                            <Nav variant="pills" className="flex-column mt-2">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Design</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Team</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">Programming</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="fourth">Frameworks</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="fifth">Libraries</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        < Col sm={9}>
                            <Tab.Content className="mt-3">
                                <Tab.Pane eventKey="first">
                                    <img src="https://miro.medium.com/max/700/1*LZHHkqMkjxIKWtPt1lsMxw.png" />
                                    <p>
                                        A design is a plan or specification for the construction of an object or system or for the implementation of an activity or process,
                                        or the result of that plan or specification in the form of a prototype, product or process.
                        </p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <img src="https://callplanets.com/images/team.jpg" />
                                    <p>
                                        A team is a group of individuals (human or non-human) working together to achieve their goal. ...
                                        Teams normally have members with complementary skills and generate synergy through a coordinated effort which allows each member to maximize their strengths and minimize their weaknesses.
                        </p>

                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    <img src="https://cdn.datafloq.com/cache/blog_pictures/878x531/artificial-intelligence-future-of-programming.jpg" />
                                    <p>
                                    Programming is the language used to communicate with the computer systems. 
                                    The process in which a set of instructions and logic are developed and implemented to do a certain task and output is generated is called Programming.
                        </p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="fourth">
                                    <img src="https://www.vrinsoft.com.au/wp-content/uploads/2018/02/Top-Javascript-Frameworks-2018.jpg" />
                                    <p>
                                    In general, a framework is a real or conceptual structure intended to serve as a support or guide for the building of something that expands the structure into something useful. ... 
                                    A framework is generally more comprehensive than a protocol and more prescriptive than a structure.
                        </p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="fifth">
                                    <img src="https://plainionist.github.io/assets/clean-architecture/Circle.Frameworks.png" />
                                    <p>
                                    Libraries are collections of books and other informational materials. People come to libraries for reading, study or reference. Libraries contain a variety of materials. 
                                    They contain printed materials, films, sound and video recordings, maps, photographs, computer software, online databases, and other media.
                        </p>
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </Container>
        )
    }
}
