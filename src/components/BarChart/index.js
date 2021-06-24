import React from 'react'
import {Bar} from 'react-chartjs-2'

import './style.css'

function BarChart({labels, data}) {
    
    return (
        <div className='barChart'>
            BarChart
            <Bar 
                data={{
                    labels: labels,
                    datasets: [{
                        label: 'Heart Rate',
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
                    }]
                }}
                width={600}
                height={400}
                options= {{
                    animation : false,
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

export default React.memo(BarChart)
