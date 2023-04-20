import React from 'react'
import './TotalOrders.css'
import { CgMenuBoxed } from "react-icons/cg";
import { AiOutlineArrowRight } from "react-icons/ai";
import { IconContext } from "react-icons";

export default function TotalOrders() {
    return (
        <div className='wraper m-2'>
            <div className='branch-dropdwon'>
                <div class="dropdown">
                    <button class="btn dropdown-toggle fw-bolder" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        All Branch
                    </button>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Branch 1</a></li>
                        <li><a class="dropdown-item" href="#">Branch 2</a></li>
                        <li><a class="dropdown-item" href="#">Branch 3</a></li>
                    </ul>
                </div>
            </div>
            <div className='order-container bg-black'>
                <div className='order-section'>
                    <div>
                        <IconContext.Provider value={{ size: "50px", className: "global-class-name" }}>
                            <div>
                                <CgMenuBoxed />
                            </div>
                        </IconContext.Provider>
                    </div>
                    <div><p>Orders</p></div>
                </div>
                <div className='order-section' id='total'>
                    <p className='order-value'>1255</p>
                </div>
                <div className='order-section'>
                    <div><p>Total Orders</p></div>
                    <div className='order-sec-btn'><button className='btn bg-white'><AiOutlineArrowRight /></button></div>
                </div>
            </div>
        </div>
    )
}
