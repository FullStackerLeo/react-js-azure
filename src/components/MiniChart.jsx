import React from 'react';
import Chart from 'react-apexcharts';

const MiniChart = ({ chartData }) => {
    const options = {
        chart: {
            id: 'mini-chart1',
            sparkline: {
                enabled: true
            }
        },
        colors: ['#5156be'],
        stroke: {
            curve: 'smooth',
            width: 2
        },
        fill: {
            opacity: 0.3
        },
        tooltip: {
            fixed: {
                enabled: false
            },
            x: {
                show: false
            },
            y: {
                title: {
                    formatter: () => ''
                }
            },
            marker: {
                show: false
            }
        }
    };

    const series = [{
        name: 'Data',
        data: [10, 20, 15, 30, 20, 40, 30]
    }];

    return (
        <Chart options={options} series={chartData} type="line" height={100} />
    );

}

export default MiniChart;
