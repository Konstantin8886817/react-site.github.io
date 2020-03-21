import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import forestImg from '../assets/forest1.jpg';
import forestdImg from '../assets/forest2.jpg';


export default class CarouselBox extends Component {
    render() {
        return (
            <div>
                <Carousel>
                    <Carousel.Item>
                        <img className="d-block w=100"
                            src={forestImg}
                            alt="Forest"
                        />
                        <Carousel.Caption>
                            <h3>Forest image</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w=100"
                            src={forestdImg}
                            alt="Forest"
                        />
                        <Carousel.Caption>
                            <h3>Forest image</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w=100"
                            src={forestImg}
                            alt="Forest"
                        />
                        <Carousel.Caption>
                            <h3>Forest image</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        )
    }
}
