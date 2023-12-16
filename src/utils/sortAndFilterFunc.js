import sortBy from 'lodash.sortby'

export const sortByPrice = (tickets) => {
  return sortBy(tickets, ['price'], ['asc'])
}

export const sortByDuration = (tickets) => {
  return sortBy(tickets, ['duration'], ['asc'])
}

export const sortByPriceAndDuration = (tickets) => {
  return sortBy(tickets, ['price', 'duration'], ['asc', 'asc'])
}

export const filterTicketsByStops = (tickets, value) => {
  return tickets.filter((ticket) => {
    return ticket.segments.every((segment) => {
      return value.includes(segment.stops.length)
    })
  })
}

export const getArrayFilter = (filter) => {
  if (filter.all) {
    return [0, 1, 2, 3]
  }

  const arrayFilter = []

  if (filter.noTransfer) {
    arrayFilter.push(0)
  }

  if (filter.oneTransfer) {
    arrayFilter.push(1)
  }

  if (filter.twoTransfers) {
    arrayFilter.push(2)
  }

  if (filter.threeTransfers) {
    arrayFilter.push(3)
  }

  return arrayFilter
}
