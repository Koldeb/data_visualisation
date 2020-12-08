
function filterListByText(list, text) {
  return list.filter(item => Object.values(item).find(value => value == text))
}

function filterListByDate(list, startDate, endDate) {
  return list.filter(item => item.time >= startDate && item.time <= endDate)
}

function compareDate(a, b) {
  if (a === b ) { return 0 }
  if (a > b ) { return 1 }
  if (a < b ) { return -1 }
}

export let filters = {
  listByText: filterListByText,
  listByDate: filterListByDate
}