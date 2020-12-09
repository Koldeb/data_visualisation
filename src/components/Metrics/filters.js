import * as dayjs from 'dayjs'
import * as customParseFormat from 'dayjs/plugin/customParseFormat'
dayjs.extend(customParseFormat)

const filterListByText = (list, text) => {
  return list.filter(item => Object.values(item).find(value => value == text))
}

const filterListByDate = (metrics, startDate, endDate) =>{
  return metrics.filter(x => {
    let timeDate = dayjs(x.time, 'DD-MM HH:mm:ss')
    return timeDate >= startDate && timeDate <= endDate
  })
}

export let filters = {
  listByText: filterListByText,
  listByDate: filterListByDate,
}