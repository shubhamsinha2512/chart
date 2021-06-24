import './App.css';
import React, {useState, useEffect} from 'react'
import BarChart from './components/BarChart/'
import LineChart from './components/LineChart/'
import DoughnutChart from './components/DoughnutChart/'

import {getLabels, filterData} from '../src/common/methods'

import callAPI from './DEMO_API/DATA_GENERATOR'

function App() {

  const [chartSelected, setChartSelected] = useState('LineChart')
  const [data, setData] = useState([]);
  const [labels, setLabels] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  function handleChartChange(e){
    e.preventDefault();
    setChartSelected(() => e.target.value);
    // console.log(chartSelected)
  }

  function renderChart(chartSelected){
    switch(chartSelected){
      case 'LineChart': return <LineChart labels={labels} data={filteredData} />; break;
      case 'BarChart': return <BarChart labels={labels} data={filteredData} />; break;
      // case 'DoughnutChart': return <DoughnutChart labels={labels} data={filteredData} />; break;
      default : return <LineChart labels={labels} data={filteredData} />
    }
  }

  async function getData(){
    return await fetch('http://122.160.15.59/v1/patients/newhistory?pid=51', {
      method : 'GET',
      headers:{
        token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im11c2hpcmFobWVkMjJAZ21haWwuY29tIiwiaWF0IjoxNjI0MDc1Mjk4LCJleHAiOjE2MjQ2ODAwOTh9.sMhbVLij2A9parLnkoOk8SiF0bVyTW3FNiQH1m2us1Q',

        'Content-Type' : 'application/json',
        userid : 165,
        usertype:3,
        orgid:16
      }
    })
    .then(res => res.json())
    .then(res => res.result.heartRate)
    .catch(err => console.log("Error in getData()", err))
  }


  useEffect(()=>{
    getData().then(res => {
      setData(res);
      setLabels(getLabels(res));
      setFilteredData(filterData(res));
      // console.log("data",data);
    })

    // setData(async () => {
    //   let res = callAPI(6)
    //   setData(res);
    //   console.log(data)
    // })
  }, [])

  useEffect(()=>{
    renderChart(chartSelected)
  }, [chartSelected])

  return (
    <div className="App">
      <select defaultValue='LineChart' onChange={handleChartChange}>
        <option value='LineChart' default>Line Chart</option>
        <option value='BarChart'>Bar Chart</option>
        {/* <option value='DoughnutChart'>Doughnut Chart</option> */}
      </select>
      {renderChart(chartSelected)}
    </div>
  );
}

export default App;
