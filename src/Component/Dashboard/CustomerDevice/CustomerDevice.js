import React from 'react';
import './CoustomerDevice.css'
import NewCustomers from './NewCustomers';
import TotalCustomers from './TotalCustomers';
import CustomersDeviceCount from './CustomersDeviceCount';

export default function CustomerDevice() {
    return (
        <div className='wraper m-2'>
            <div className='customer-device-container'>
                <div className='customer-device-title'>
                    Coustomer / Device
                </div>
                <div className='customer-device-content'>
                    <div className='new-customer-table'>
                        <NewCustomers />
                    </div>
                    <div className='total-customer'>
                        <TotalCustomers />
                    </div>
                </div>
                <div className='customer-device-count'>
                        <CustomersDeviceCount />
                </div>
            </div>
        </div>
    )
}
