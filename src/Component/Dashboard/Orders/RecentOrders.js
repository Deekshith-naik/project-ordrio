import React, { useEffect, useState } from 'react'
import './RecentOrders.css'
import { AiOutlineArrowRight } from "react-icons/ai";
import { GoPrimitiveDot } from "react-icons/go";
import RecentOrdersData from "../../Data/RecentOrdersData.json";
import { IconContext } from "react-icons";

export default function RecentOrders() {

    const [ordersData, setOrdersData] = useState(RecentOrdersData);

    return (
        <div className='wraper m-2'>
            <div className='recent-order-container'>
                <div className='recent-order-heading'>
                    <p className='left-section'>Recent Orders</p>
                    <p className='right-section'>See All <AiOutlineArrowRight /></p>
                </div>
                
                <div className='recent-order-section'>
                    <div className='recent-order-col'>
                        <div>Order No</div>
                        <div>Customer</div>
                        <div>Status</div>
                        <div>Order Value</div>
                    </div>
                    <div className='recent-order-line'><hr></hr></div>
                    {ordersData && ordersData.map(({orderno,customer,status,value,color}) => (
                        <div className='recent-order-row'>
                            <div>{orderno}</div>
                            <div>{customer}</div>
                            <div>
                                <IconContext.Provider value={{ color: color, className: "global-class-name" }}>
                                        <GoPrimitiveDot />
                                </IconContext.Provider>
                                {status}
                            </div>
                            <div>{value}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
