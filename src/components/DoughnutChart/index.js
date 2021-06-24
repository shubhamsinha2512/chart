import React from 'react'
import Chart from 'chart.js'
import {Scatter} from 'react-chartjs-2'

import {getLabels, filterData} from '../../common/methods'

import './style.css'

function DoughnutChart({labels, data}) {

    return (
        <div className='doughnutChart'>
            DoughnutChart
            <Scatter 
                data={{
                    labels: labels,
                    datasets: [{
                        label: 'DEMO DATA',
                        data: data,
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)'
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)'
                        ],
                        borderWidth: 2,
                        tension:0.1,
                        borderDash: [10,2],
                    }]
                }}
                width={600}
                height={400}
                options= {{
                    maintainAspectRatio: false,
                    scales: {
                        y: {
                            beginAtZero: false
                        }
                    }
                }}
            />
        </div>
    )
}

export default DoughnutChart
