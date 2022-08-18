import React from "react";
import Carousel from 'react-bootstrap/Carousel';


// images
import dog from '../assets/dog-img.jpg';
import lady from '../assets/lady-img.jpg'
const Testimonials = () => (
    <>
        {/* <!-- Features --> */}


        <section id="features">

            <div class="row">
                <div class="feature-box col-lg-4">
                    <i class="icon fas fa-check-circle fa-4x"></i>
                    <h3>Easy to use.</h3>
                    <p>So easy to use, even your dog could do it.</p>
                </div>

                <div class="feature-box col-lg-4">
                    <i class="icon fas fa-bullseye fa-4x"></i>
                    <h3>Elite Clientele</h3>
                    <p>We have all the dogs, the greatest dogs.</p>
                </div>

                <div class="feature-box col-lg-4">
                    <i class="icon fas fa-heart fa-4x"></i>
                    <h3>Guaranteed to work.</h3>
                    <p>Find the love of your dog's life or your money back.</p>
                </div>
            </div>
        </section>

        {/* <!-- Testimonials --> */}

        <section id="testimonials">

            <Carousel id="testimonials-carousel">
                <Carousel.Item class="carousel-item active">
                    <h3> I no longer have to sniff other dogs for love. I've found the hottest
                        Corgi on TinDog. Woof.</h3>
                    <Carousel.Caption>

                        <img src={dog} alt="dog-profile" />
                        <em>Pebbles, New York</em>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <h3> My dog used to be so lonely, but with TinDog's help, they've found the love of their life. I think.</h3>
                    <Carousel.Caption>

                    <img class="testimonial-image" src={lady} alt="lady-profile" />
                        <em>Beverly, Illinois</em>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>


        </section>

    </>
);

export default Testimonials;