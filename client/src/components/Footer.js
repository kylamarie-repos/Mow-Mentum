import React from "react";
import { Link } from "react-router-dom";
import "../style.css";

export default function Footer() {
    return (
        <footer className="footer navbar navbar-expand-lg mt-5 p-1 bg-body-secondary">
            <nav className="navbar container">
            <div className="container-fluid">
                <a className="navbar-brand" to="/">
                <img src="../images/Logo.png" alt="Logo" id="logo" className="d-inline-block align-text-top" />
                </a>
                <ul className="navbar-nav">
                    <li className="nav-item pe-3 ps-3">
                        <Link className="nav-link active link-body-emphasis" aria-current="page" to="/">Home</Link>
                    </li>
                    <li className="nav-item pe-3 ps-3">
                        <Link className="nav-link active link-body-emphasis" aria-current="page" to="/About">About</Link>
                    </li>
                    <li className="nav-item pe-3 ps-3">
                        <Link className="nav-link link-body-emphasis" to="/Services">Services</Link>
                    </li>
                    <li className="nav-item pe-3 ps-3">
                        <Link className="nav-link link-body-emphasis" to="/Contact">Contact</Link>
                    </li>
                </ul>
            </div>
            </nav>
        </footer>
    );
}