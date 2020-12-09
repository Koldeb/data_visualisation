import { createPopper } from '@popperjs/core';

export const getColumnsDefinition = (metrics) => {
  return [
    {
      name: 'Time',
      selector: 'time',
      sortable: true,
      minWidth:'150px',
      cell : item => <strong>{item.time}</strong>
    },
    {
      name: <ColumnText title='Files' propName='files' data={metrics}/>,
      selector: 'files',
      sortable: 'true',
    },
    {
      name: <ColumnText title='Inodes' propName='inodes' data={metrics}/>,
      selector: 'inodes',
      sortable: true,
    },
    {
      name: <ColumnText title='Received' propName='recv' data={metrics}/>,
      selector: 'recv',
      sortable: true,
    },
    {
      name: <ColumnText title='Send' propName='send' data={metrics}/>,
      selector: 'send',
      sortable: true,
    },
    {
      name: <ColumnText title='Used' propName='used' data={metrics}/>,
      selector: 'used',
      sortable: true,
      minWidth:'150px'
    },
    {
      name: <ColumnText title='Buff' propName='buff' data={metrics}/>,
      selector: 'buff',
      sortable: true,
    },
    {
      name: <ColumnText title='Cach' propName='cach' data={metrics}/>,
      selector: 'cach',
      sortable: true,
    },
    {
      name: <ColumnText title='Free' propName='free' data={metrics}/>,
      selector: 'free',
      sortable: true,
      minWidth:'150px'
    },
    {
      name: <ColumnText title='User' propName='usr' data={metrics}/>,
      selector: 'usr',
      sortable: true,
    },
    {
      name: <ColumnText title='System' propName='sys' data={metrics}/>,
      selector: 'sys',
      sortable: true,
    },
    {
      name: <ColumnText title='Idle' propName='idl' data={metrics}/>,
      selector: 'idl',
      sortable: true,
    },
    {
      name: <ColumnText title='Wai' propName='wai' data={metrics}/>,
      selector: 'wai',
      sortable: true,
    },
    {
      name: <ColumnText title='Hiq' propName='hiq' data={metrics}/>,
      selector: 'hiq',
      sortable: true,
    },
    {
      name: <ColumnText title='Siq' propName='siq' data={metrics}/>,
      selector: 'siq',
      sortable: true,
    },
    {
      name: <ColumnText title='Read' propName='read' data={metrics}/>,
      selector: 'read',
      sortable: true,
    },
    {
      name: <ColumnText title='Write' propName='writ' data={metrics}/>,
      selector: 'writ',
      sortable: true,
    },
    {
      name: <ColumnText title='1m' propName='1m' data={metrics}/>,
      selector: '1m',
      sortable: true,
    },
    {
      name: <ColumnText title='5m' propName='5m' data={metrics}/>,
      selector: '5m',
      sortable: true,
    },
    {
      name: <ColumnText title='15m' propName='15m' data={metrics}/>,
      selector: '15m',
      sortable: true,
    },
  ]
}



const ColumnText = ({title, propName, data}) => {

  // const popcorn = document.querySelector('span');
  // const tooltip = document.querySelector('div');

  // createPopper(popcorn, tooltip, {
  //   placement: 'top',
  // });

  const numAverage = (data) => {
    let arrayNumber = data.map(x => x[propName])
    let a = arrayNumber.length
    let b = 0
    let i

    for (i = 0; i < a; i++){
      b+= Number(arrayNumber[i])
      b+= Math.trunc(b)
    }
    return b/a;
  }

  return(
    <>
      <span> {title} </span>
      <div id="tooltip" role="tooltip">
        Max : {
          Math.max(...data.map(x => x[propName]))
        }
        <br/>
        Min :  {
          Math.min(...data.map(x => x[propName]))
        }<br/>
        Moy : {
            numAverage(data)
        }
      </div>
    </>
  )
}
