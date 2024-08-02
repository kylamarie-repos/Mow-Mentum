import React, { useEffect, useRef, useState } from "react";
import axios from "axios";

export default function Contact()
{
    const [formData, setFormData] = useState({
        inputCompany: "",
        inputCustomerName: "",
        inputEmail: "",
        inputPhoneNumber: "",
        inputAddress: "",
        inputCity: "",
        inputRegion: "",
        inputPostcode: "",
        inputMessage: "",
    });

    const [successMessage, setSuccessMessage] = useState("");

    
    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [id]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:5000/api/contacts", formData);
            console.log("Form submitted successfully:", response.data);

            setSuccessMessage("Enquiry submitted successfully!");
            resetForm();
        } catch (error) {
            console.error("Error submitting form", error);
        }
    };

    const resetForm = () => {
        setFormData({
            inputCompany: "",
            inputCustomerName: "",
            inputEmail: "",
            inputPhoneNumber: "",
            inputAddress: "",
            inputCity: "",
            inputRegion: "",
            inputPostcode: "",
            inputMessage: "",
        });
    };

    return(
        <>
    <div className="welcomeContainer">
        <div className="backgroundImage" alt="background image of grass" style={{backgroundImage: `url("../images/wet_lawn.jpg")`}}></div>
        <div className="overlay container d-flex align-items-center justify-content-start text-light">
            <div>
                <h1 className="display-1 glow">Contact Us</h1>
            </div>
        </div>
    </div>


    <div className="container">
        <h3 className="display-4">Our Info</h3>
        <h5>Phone Number: 7828 6113</h5>
        <h5>Address: 510 Wimbledon Road, Pōrangahau 4292</h5>
        <br />
        <br />

        <h1 className="display-4">Contact Form</h1>
    <form className="row g-3" onSubmit={handleSubmit}>
        <div className="col-md-6 mb-2">
            <label for="inputCompany" className="form-label">Company</label>
            <input type="text" className="form-control" id="inputCompany" value={formData.inputCompany} onChange={handleChange}  />
        </div>
        <div className="col-md-6 mb-2">
            <label for="inputCustomerName" className="form-label">Customer Name <code>*</code></label>
            <input type="text" className="form-control" id="inputCustomerName" value={formData.inputCustomerName} onChange={handleChange}  required />
        </div>
        <div className="col-md-6 mb-2">
            <label for="inputEmail" className="form-label">Email <code>*</code></label>
            <input type="email" className="form-control" id="inputEmail" value={formData.inputEmail} onChange={handleChange}  required />
        </div>
        <div className="col-md-6 mb-2">
            <label for="inputPhoneNumber" className="form-label">Phone Number <code>*</code></label>
            <input type="number" className="form-control" id="inputPhoneNumber" value={formData.inputPhoneNumber} onChange={handleChange}  required />
        </div>
        <div className="col-12 mb-2">
            <label for="inputAddress" className="form-label">Physical Address <code>*</code></label>
            <input type="text" className="form-control" id="inputAddress"  value={formData.inputAddress} onChange={handleChange}  required />
        </div>
        <div className="mb-3 mb-2">
            <label for="inputMessage" className="form-label">How can we help? <code>*</code></label>
            <textarea className="form-control" id="inputMessage" rows="3" value={formData.inputMessage} onChange={handleChange}  required></textarea>
        </div>
        <div className="col-12 mb-2">
            <button type="submit" className="btn btn-success submit-btn">Submit Enquiry</button>
        </div>
    </form>
        {successMessage && (
            <div className="alert alert-success mt-3" role="alert">
                {successMessage}
            </div>
        )}
    </div>
        </>
    );
}