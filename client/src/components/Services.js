import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../style.css";

export default function Services() {
    const [services, setServices] = useState([]);
    const [selectedService, setSelectedService] = useState(null);

    useEffect(() => {
        fetch('http://localhost:5000/api/services')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to fetch services');
                }
                return response.json();
            })
            .then(data => setServices(data))
            .catch(error => console.error("Error fetching data:", error));
    }, []);

    
    return (
        <>
            <div className="welcomeContainer">
                <div className="backgroundImage" alt="background image of grass" style={{ backgroundImage: `url("../images/wet_lawn.jpg")` }}></div>
                <div className="overlay container d-flex align-items-center justify-content-start text-light">
                    <div>
                        <h1 className="display-1 glow">Our Services</h1>
                    </div>
                </div>
            </div>

            <div className="container content text-center">
                <div className="row row-cols-1 row-cols-md-3 g-4 align-items-start mt-4">
                    {services.map((service, index) => (
                        <div className="col" key={index}>
                            <div className="card h-100">
                                <img src={service.image} className="card-img-top img-fluid" alt={service.jobname} />
                                <div className="card-body d-flex flex-column">
                                    <h5 className="card-title">{service.jobname}</h5>
                                    {service.code && <p><code>{service.code}</code></p>}
                                    <p className="card-text">{service.short_description}</p>
                                    <button
                                        className="btn btn-primary mt-auto stretched-link"
                                        onClick={() => setSelectedService(service)}
                                        data-bs-toggle="modal"
                                        data-bs-target="#serviceModal"
                                    >
                                        + Learn More
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Bootstrap modal for displaying service details */}
            <div className="modal fade" id="serviceModal" tabIndex="-1" aria-labelledby="serviceModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title fw-bold" id="serviceModalLabel">{selectedService?.jobname}</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            {selectedService && (
                                <>
                                    <div className="card">
                                        <img src={selectedService.image} className="card-img-top img-fluid" alt={selectedService.jobname} />
                                        <div className="card-body">
                                            {/* Split description into paragraphs, preserving <code> tags */}
                                            {selectedService.description.split('\n').map((paragraph, index) => {
                                                // Insert newline before "disclaimer"
                                                if (paragraph.toLowerCase().includes("disclaimer")) {
                                                    paragraph = paragraph.replace(/(disclaimer)/ig, "\n\n$1");
                                                }
                                                return <p key={index} dangerouslySetInnerHTML={{ __html: paragraph.replace(/\n/g, "<br>") }}></p>;
                                            })}
                                            <br/>
                                            <div className="d-flex align-items-center justify-content-center">
                                                <Link className="btn btn-success rounded-button btn-lg" to="/Contact"
                                                    onClick={() => {
                                                        const modal = document.getElementById('serviceModal');
                                                        modal.hide();
                                                    }}
                                                >
                                                    Request a Quote
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <div className="overlay container d-flex align-items-center justify-content-center text-light mt-5">
                <Link className="btn btn-success rounded-button btn-lg" to="/Contact">Request a Quote</Link>
            </div>
        </>
    );
}
