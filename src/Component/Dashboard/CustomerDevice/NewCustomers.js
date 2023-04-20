
import React from 'react';
import './CoustomerDevice.css';
import { AiOutlineArrowRight } from "react-icons/ai";
import NewSignupCustData from "../../Data/NewSignupCustData.json";

export default function NewCustomers() {
    return (
        <div className='recent-order-section'>
                    <div className='recent-order-heading'>
                        <p className='left-section'>New Signup</p>
                        <p className='right-section'>See All <AiOutlineArrowRight /></p>
                    </div>
                    {NewSignupCustData && NewSignupCustData.map(({customer,device,datetime}) => (
                        <div className='recent-order-row'>
                            <div>{customer}</div>
                            <div>{device}</div>
                            <div>{datetime}</div>
                        </div>
                    ))}
                </div>
    )
}
