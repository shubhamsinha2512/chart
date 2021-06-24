import React from 'react'
import {Line} from 'react-chartjs-2'


import './style.css'

function LineChart ({labels, data}) {
    
    return (
        <div className='lineChart'>
            LineChart
            <Line 
                data={{
                    labels: labels,
                    datasets: [{
                        label: 'HEART RATE',
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
                        borderWidth: 0.5,
                        borderJoinStyle:'none',
                        tension:0.5,
                    }]
                }}
                width={600}
                height={400}
                options= {{
                    elements: {
                        point:{radius:0}
                    },
                    animation: false,
                    maintainAspectRatio: false,
                    scales: {
                        y: {
                            beginAtZero: false
                        }
                    },
                    plugins: {
                        decimation : true
                    }
                }}
            />
        </div>
    )
}


export default React.memo(LineChart)
