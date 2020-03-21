import React, { Component } from 'react'
import { Container, Row, Col, Media, Card, ListGroup } from 'react-bootstrap'

export default class Blog extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col md="9">
                        <Media className="m-5">
                            <img
                                width={150}
                                height={150}
                                className="mr-3"
                                src="https://ktechgmbh.com/wp-content/uploads/2019/05/htmlcss-1.jpg"
                            />
                            <Media.Body>
                                <h5>Blog post</h5>
                                <p>
                                HTML, HyperText Markup Language, gives content structure and meaning by defining that content as, for example, headings, paragraphs, or images. 
                                CSS, or Cascading Style Sheets, is a presentation language created to style the appearance of content—using, for example, fonts or colors.
                                </p>
                            </Media.Body>
                        </Media>
                        <Media className="m-5">
                            <img
                                width={150}
                                height={150}
                                className="mr-3"
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png"
                            />
                            <Media.Body>
                                <h5>Blog post</h5>
                                <p>
                                JavaScript® (often shortened to JS) is a lightweight, interpreted, object-oriented language with first-class functions, and is best known as the scripting language for Web pages, 
                                but its used in many non-browser environments as well. ... JavaScript can function as both a procedural and an object oriented language.
                                </p>
                            </Media.Body>
                        </Media>
                        <Media className="m-5">
                            <img
                                width={150}
                                height={150}
                                className="mr-3"
                                src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/267_Python_logo-512.png"
                            />
                            <Media.Body>
                                <h5>Blog post</h5>
                                <p>
                                Python is an interpreted, high-level, general-purpose programming language. ... Python is dynamically typed and garbage-collected. 
                                It supports multiple programming paradigms, including procedural, object-oriented, and functional programming.
                                </p>
                            </Media.Body>
                        </Media>
                        <Media className="m-5">
                            <img
                                width={150}
                                height={150}
                                className="mr-3"
                                src="https://logoeps.com/wp-content/uploads/2011/06/java-logo-vector.png"
                            />
                            <Media.Body>
                                <h5>Blog post</h5>
                                <p>
                                Java is a general-purpose programming language that is class-based, object-oriented, and designed to have as few implementation dependencies as possible. ... 
                                Java applications are typically compiled to bytecode that can run on any Java virtual machine (JVM) regardless of the underlying computer architecture.
                                </p>
                            </Media.Body>
                        </Media>
                        <Media className="m-5">
                        <img
                            width={150}
                            height={150}
                            className="mr-3"
                            src="https://2.bp.blogspot.com/-lhYpHoieFDc/VxcKmqaN15I/AAAAAAAAABI/9Lu61sapVdoCCcu71mwC9jZK4k8WjQaaQCLcB/s1600/cplusplus-logo.png"
                        />
                        <Media.Body>
                            <h5>Blog post</h5>
                            <p>
                            C++ is a high-level, general-purpose programming language created by Bjarne Stroustrup as ... 
                            In 1979, Bjarne Stroustrup, a Danish computer scientist, began work on "C with Classes", the predecessor to C++.
                            </p>
                        </Media.Body>
                    </Media>
                    </Col>
                    <Col md="3">
                        <h5 className="text-center mt-5">Categories</h5>
                        <Card border="warning">
                            <ListGroup variant="flush">
                                <ListGroup.Item>HTML/CSS</ListGroup.Item>
                                <ListGroup.Item>JavaScript</ListGroup.Item>
                                <ListGroup.Item>Python</ListGroup.Item>
                                <ListGroup.Item>Java</ListGroup.Item>
                                <ListGroup.Item>C++</ListGroup.Item>
                            </ListGroup>
                        </Card>

                        <Card className="mt-3 bg-light">
                            <Card.Body>
                                <Card.Title>Side widget</Card.Title>
                                <Card.Text>
                                    Originally used only in web browsers, JavaScript engines are now embedded in server-side website deployments, often via Node.js.
                                    They are also embedded in a variety of applications created with frameworks such as Electron and Cordova.
                                </Card.Text>
                            </Card.Body>
                        </Card>

                    </Col>
                </Row>
            </Container>
        )
    }
}
