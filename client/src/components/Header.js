import React from "react";
import { Link } from "react-router-dom";
import "../style.css";

export default function Header()
{
    return(
        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-transparent ps-5 pe-5">
        <div className="container-fluid">
            <Link className="nav-link active link-body-emphasis" aria-current="page" to="/">
            <img src="../images/Logo.png" alt="Logo" id="logo" className="d-inline-block align-text-top" />
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item p-4">
                <Link className="nav-link active link-body-emphasis fw-bold" aria-current="page" to="/">Home</Link>
                </li>
                <li className="nav-item p-4">
                <Link className="nav-link link-body-emphasis fw-bold" to="/About">About</Link>
                </li>
                <li className="nav-item p-4">
                <Link className="nav-link link-body-emphasis fw-bold" to="/Services">Services</Link>
                </li>
                <li className="nav-item p-4">
                <Link className="btn btn-success rounded-button" to="/Contact">Contact Us</Link>
                </li>
            </ul>
            </div>
        </div>
        </nav>
        </>
    );
}