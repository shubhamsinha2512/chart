import React from 'react'
import Chart from 'chart.js'
import {Line} from 'react-chartjs-2'
import {getLabels, filterData} from '../../common/methods'


import './style.css'

class LineChart extends React.Component {
    
    constructor(props){
        super(props)
        this.state = {
            labels : props.labels,
            data : props.data
        }
        // console.log(this.labels)
    }

    shouldComponentUpdate(nextProps){
        if(nextProps.labels != this.props.labels) return true;
        if(nextProps.data != this.props.data) return true;
        return false;
    }

    componentDidMount(){
        console.log("renderd")
    }

    render(){
    console.log('rendering')

    return (
        <div className='lineChart'>
            LineChart
            <Line 
                data={{
                    labels: this.state.labels,
                    datasets: [{
                        label: 'HEART RATE',
                        data: this.state.data,
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
                        tension:0.4,
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
}

export default React.memo(LineChart)
