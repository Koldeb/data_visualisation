import React, {useEffect, useState} from 'react'
import axios from 'axios'
import DataTable from 'react-data-table-component'
import DatePicker from 'react-datepicker'
import { filters} from './filters'
import { StyledDataTable, TextField } from './styles'
import "react-datepicker/dist/react-datepicker.css";



const Metrics = () => {
  let [metrics, setMetrics] = useState([]);
  let [tableLines, setTableLines] = useState([])
  let [searchText, setSearchText] = useState('')
  let [startDate, setStartDate] = useState(new Date()) // Mettre la dernière heure
  let [endDate, setEndDate] = useState(new Date())
  
  useEffect( () => { fetchData() }, []);
  useEffect(updateList, [searchText, metrics])
  
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
    let filteredListByText = searchText ? filters.listByText(metrics, searchText) : metrics
    let filteredListByDate = startDate ? filters.listByDate(filteredListByText, startDate, endDate) : filteredListByText
    setTableLines(filteredListByText)
  }

  const columnsDefinition = [
    {
      name: 'Time',
      selector: 'time',
      sortable: true,
      minWidth:'150px'
    },
    {
      name: 'Files',
      selector: 'files',
      sortable: 'true',
    },
    {
      name: 'Inodes',
      selector: 'inodes',
      sortable: true,
    },
    {
      name: 'Received',
      selector: 'recv',
      sortable: true,
    },
    {
      name: 'Send',
      selector: 'send',
      sortable: true,
    },
    {
      name: 'Used',
      selector: 'used',
      sortable: true,
      minWidth:'150px'
    },
    {
      name: 'Buff',
      selector: 'buff',
      sortable: true,
    },
    {
      name: 'Cach',
      selector: 'cach',
      sortable: true,
    },
    {
      name: 'Free',
      selector: 'free',
      sortable: true,
      minWidth:'150px'
    },
    {
      name: 'Usr',
      selector: 'usr',
      sortable: true,
    },
    {
      name: 'Sys',
      selector: 'sys',
      sortable: true,
    },
    {
      name: 'Idl',
      selector: 'idl',
      sortable: true,
    },
    {
      name: 'Wai',
      selector: 'wai',
      sortable: true,
    },
    {
      name: 'Hiq',
      selector: 'hiq',
      sortable: true,
    },
    {
      name: 'Siq',
      selector: 'siq',
      sortable: true,
    },
    {
      name: 'Read',
      selector: 'read',
      sortable: true,
    },
    {
      name: 'Writ',
      selector: 'writ',
      sortable: true,
    },
    {
      name: '1m',
      selector: '1m',
      sortable: true,
    },
    {
      name: '5m',
      selector: '5m',
      sortable: true,
    },
    {
      name: '15m',
      selector: '15m',
      sortable: true,
    },
  ]
  return(
    <StyledDataTable>
       <TextField value={searchText} onChange={e => setSearchText(e.target.value)} placeholder='Search metrics'/>
      <DatePicker selected={startDate} onChange={date => setStartDate(date)}/>
      <DataTable 
        title='Information système'
        data={tableLines} 
        columns={columnsDefinition}
        pagination
        striped
        highlightOnHover
        />
    </StyledDataTable>
  )
}


export default Metrics;