import React, { Component, useState} from 'react';
import ReactApexChart from 'react-apexcharts';

export default function LineChart() {

    const [state, setState] = useState({
        series: [{
            name: "Desktops",
            data: [0, 10, 15, 20, 25, 30, 35, 40]
        }],
        options: {
            chart: {
                height: 350,
                type: 'line',
                zoom: {
                    enabled: false
                }
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: 'straight'
            },
            xaxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            }
        }
    })

    return (
        <div id="chart">
            <ReactApexChart options={state.options} series={state.series} type="line" height={260} />

        </div>
    );
  }