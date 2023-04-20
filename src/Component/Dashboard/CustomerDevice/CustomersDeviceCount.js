import React from 'react';
import './CoustomerDevice.css'
import { AiOutlineAndroid } from "react-icons/ai";
import { TfiApple } from "react-icons/tfi";
import { SlGlobe } from "react-icons/sl";
import { IconContext } from "react-icons";

export default function CustomersDeviceCount() {
    return (
        <div className='device-wrap'>
            <div className='device-android'>
                <p className='border-circle'>
                    <IconContext.Provider value={{ size: "35px", className: "global-class-name" }}>
                        <div>
                            <AiOutlineAndroid />
                        </div>
                    </IconContext.Provider>
                </p>
                <p className='device-name'>Android</p>
                <p className='device-count'>100</p>
            </div>
            <div className='device-ios'>
                <p className='border-circle'>
                    <IconContext.Provider value={{ size: "35px", className: "global-class-name" }}>
                        <div>
                            <TfiApple />
                        </div>
                    </IconContext.Provider>
                </p>
                <p className='device-name'>IOS</p>
                <p className='device-count'>150</p>
            </div>
            <div className='device-others'>
            <p className='border-circle'>
                <IconContext.Provider value={{ size: "35px", className: "global-class-name" }}>
                        <div>
                            <SlGlobe />
                        </div>
                    </IconContext.Provider>
                </p>
                <p className='device-name'>Others</p>
                <p className='device-count'>200</p>
            </div>
        </div>
    )
}
