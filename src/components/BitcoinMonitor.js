import React from 'react';
import { Line } from 'react-chartjs-2';

const BitcoinMonitor = (coinData = []) => {

    const datePriceObj = coinData.coinData.bpi;
    const labels = [];
    const chartData = [];

    for (let date in datePriceObj) {
        labels.push(date);
        chartData.push(datePriceObj[date])
    }

    const data = {
        labels: labels,
        datasets: [
            {
                label: '31 Day Bitcoin Report',
                fill: false,
                lineTension: 0.1,
                backgroundColor: 'rgba(75,192,192,0.4)',
                borderColor: 'rgba(75,192,192,1)',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: 'rgba(75,192,192,1)',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                pointHoverBorderColor: 'rgba(220,220,220,1)',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: chartData,
            }
        ]
    }

    return (
        <Line data={data} />
    );
};

export default BitcoinMonitor;
