import React from 'react'
import LineChart from '../Charts/LineChart/LineChart';
import './SalesIncome.css';

export default function SalesIncome() {
  return (
    <div className='wraper m-2'>
        <div className='sales-income-container'>
            <div className='chart-btn-holder'>
                <div>
                <button className='btn btn-warning'>Day</button>
                <button className='btn btn-outline-dark'>Week</button>
                <button className='btn btn-outline-dark'>Month</button>
                <button className='btn btn-outline-dark'>Year</button>
                <button className='btn btn-outline-dark'>2022-11-21</button>
                </div>
            </div>
            <div className='chart-holder'>
                <LineChart />
            </div>
            
        </div>
    </div>
  );
}