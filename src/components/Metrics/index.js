import React, {useEffect, useState} from 'react'
import axios from 'axios'
import DataTable from 'react-data-table-component'
import DatePicker from 'react-datepicker'
import { filters} from './filters'
import { StyledDataTable, TextField } from './styles'
import {getColumnsDefinition} from './getColumnsDefinition'
import "react-datepicker/dist/react-datepicker.css";

const Metrics = () => {
  let [metrics, setMetrics] = useState([]);
  let [tableLines, setTableLines] = useState([])
  let [searchText, setSearchText] = useState('')
  let [startDate, setStartDate] = useState(new Date('2020-01-01'))
  let [endDate, setEndDate] = useState(new Date())
  
  useEffect( () => { fetchData() }, []);
  useEffect(updateList, [searchText, startDate, endDate, metrics])
  
  async function fetchData(){
    let response = await axios.get('metrics.json')

    if( !response?.data ) {
      throw 'cannot fetch data'
    }
    if(response.data.length === 0){
      throw 'no data received, array is empty'
    }
    setMetrics(response.data)
  }
  function updateList() {
    let lines = metrics
    lines = searchText ? filters.listByText(lines, searchText) : lines
    lines = startDate && endDate ? filters.listByDate(lines, startDate, endDate) : lines
    setTableLines(lines)
  }

  return(
    <StyledDataTable>
       <TextField value={searchText} onChange={e => setSearchText(e.target.value)} placeholder='Search type of metrics'/>
       
      <DatePicker 
        selected={startDate} 
        onChange={date => setStartDate(date)}
        showTimeSelect
        className='datePicker'
        placeholder='Pick a date' 
        dateFormat="Pp"/>

      <DatePicker 
        selected={endDate} 
        onChange={date => setEndDate(date)}
        showTimeSelect
        className='datePicker'
        placeholder='Pick a date' 
        dateFormat="Pp"/>

      <DataTable 
        title='Information système'
        data={tableLines} 
        columns={getColumnsDefinition(tableLines)}
        pagination
        striped
        highlightOnHover
        />
    </StyledDataTable>
  )
}


export default Metrics;