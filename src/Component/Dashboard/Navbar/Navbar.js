import React from 'react'
import './Navbar.css'
import { GrNotification } from "react-icons/gr";
import { BsGrid } from "react-icons/bs";
import { BiPlus } from "react-icons/bi";
export default function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-white">
                <div className="container-fluid">
                    <a className="navbar-brand fw-bolder" href="/">Dashboard</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <div className="ms-auto d-flex align-items-center">
                            <form className="d-flex search-block" role="search">
                                <input className="form-control" type="search" placeholder="Type here to search" aria-label="Search" />
                            </form>
                            <ul className="navbar-nav mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <GrNotification />
                                </li>
                                <li className="nav-item">
                                    <BsGrid />
                                </li>
                                <li className="nav-item">
                                    <button className='nav-link btn bg-warning custom-btn-style fw-bold'><BiPlus /></button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}
