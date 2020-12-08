
function filterListByText(list, text) {
  return list.filter(item => Object.values(item).find(value => value == text))
}
function filterListByDate(metrics, startDate, endDate){
  return metrics.filter(x => {
    let isoDate = convertToIsoDate(x.time)
    return isoDate >= startDate && isoDate <= endDate
  })
}
function convertToIsoDate(date){
  let convertDate = date.toISOString();
  return convertDate;
}

function compareDate(a, b) {
  if (a === b ) { return 0 }
  if (a > b ) { return 1 }
  if (a < b ) { return -1 }
}

export let filters = {
  listByText: filterListByText,
  listByDate: filterListByDate,
}