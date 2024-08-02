import React from "react";
import { Link } from "react-router-dom";
import "../style.css";

export default function Content()
{
    return (
        <>

        <div className="homeWelcomeContainer">
            <div className="homeBackgroundImage" alt="background image of grass" style={{backgroundImage: `url("../images/wet_lawn.jpg")`}}></div>
            <div className="overlay container d-flex align-items-center justify-content-center text-center text-light">
                <div>
                    <h1 className="display-1 glow">Mow-Mentum</h1>
                    <Link className="btn btn-success rounded-button btn-lg" to="/Contact">Contact Us</Link>
                </div>
            </div>
        </div>


    <div className="container d-flex align-items-center justify-content-center text-center">
    <div id="carouselExampleIndicators" className="carousel slide">
        <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
            <div className="carousel-item active">
            <img src="../images/white_house_lawn.jpeg" className="img-fluid w-100" alt="white house with lawns mowed" />
            </div>
            <div className="carousel-item">
            <img src="../images/beige_house_lawn.jpeg" className="img-fluid w-100" alt="beige house with lawns mowed" />
            </div>
            <div className="carousel-item">
            <img src="../images/aerial_lawn.jpeg" className="img-fluid w-100" alt="aerial view of house with lawns mowed" />
            </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
        </div>
    </div>

    <div className="d-flex justify-content-center align-items-center text-light text-center">
        <Link className="btn btn-success rounded-button btn-lg m-4" to="/Services">See Services</Link>
        <Link className="btn btn-success rounded-button btn-lg" to="/Contact">Contact Us</Link>
    </div>

            <div className="container mt-5">
        <div className="row align-items-start">
            <div className="col-lg-6">
                <h1 className="mb-3">Lorem ipsum dolor sit amet</h1>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Senectus et netus et malesuada. Risus nullam eget felis eget. Molestie at elementum eu facilisis sed. Varius vel pharetra vel turpis nunc eget lorem. Dictum at tempor commodo ullamcorper. Fermentum leo vel orci porta non. Neque egestas congue quisque egestas diam in arcu cursus euismod. Phasellus vestibulum lorem sed risus ultricies tristique. 
            <br/>
            <br/>
            Adipiscing elit ut aliquam purus sit amet luctus. Magnis dis parturient montes nascetur ridiculus mus mauris vitae. Pretium nibh ipsum consequat nisl vel pretium lectus quam. Sollicitudin aliquam ultrices sagittis orci a scelerisque purus semper. Velit aliquet sagittis id consectetur purus. Semper eget duis at tellus at urna condimentum. Sit amet consectetur adipiscing elit duis. Nibh sit amet commodo nulla. Vitae purus faucibus ornare suspendisse sed nisi lacus.
            </div>
            <div className="col-lg-6">
            <img src="../images/Lawn-Mowing.jpg" className="d-flex img-fluid" alt="red lawn mower mowing grass" />
            </div>
        </div>
        </div>

    <div className="bg-body-tertiary">
        <div className="container mt-5 pt-3 pb-4">
            <div className="row d-flex justify-content-center align-items-center text-center">
                <h1 className="mb-3">Testimonials</h1>
                <div className="col-lg-4 testimonial-item">
                    <h5 className="card-title">Karen</h5>
                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <img src="../images/5_star_rating.png" className="w-50 testimonial-img" alt="5 golden stars" />
                </div>
                <div className="col-lg-4 testimonial-item">
                    <h5 className="card-title">Karen</h5>
                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <img src="../images/5_star_rating.png" className="w-50 testimonial-img" alt="5 golden stars" />
                </div>
                <div className="col-lg-4 testimonial-item">
                    <h5 className="card-title">Karen</h5>
                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <img src="../images/5_star_rating.png" className="w-50 testimonial-img" alt="5 golden stars" />
                </div>
            </div>
        </div>
    </div>

        </>
    );
}