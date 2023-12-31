import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as ticketActions from '../../store/action'
import {
  sortByPrice,
  sortByDuration,
  sortByPriceAndDuration,
  filterTicketsByStops,
  getArrayFilter,
} from '../../utils/sortAndFilterFunc'
import Loader from '../Loader/loader'
import Ticket from '../Ticket/ticket'

import classes from './ticket-list.module.scss'

const TicketList = ({ tickets, sortType, filter, loading }) => {
  const [lcTickets, setLcTickets] = useState([])

  const [showMore, setShowMore] = useState(5)

  useEffect(() => {
    const arrayFilter = getArrayFilter(filter)
    if (sortType === 'lowPrice') {
      setLcTickets(sortByPrice(filterTicketsByStops(tickets, arrayFilter)))
    } else if (sortType === 'fast') {
      setLcTickets(sortByDuration(filterTicketsByStops(tickets, arrayFilter)))
    } else if (sortType === 'optimal') {
      setLcTickets(sortByPriceAndDuration(filterTicketsByStops(tickets, arrayFilter)))
    }
  }, [tickets, filter, sortType])

  const handleMoreTickets = () => {
    setShowMore(showMore + 5)
  }

  return (
    <div className={classes['ticket-list']}>
      {loading && (
        <div className={classes.loader}>
          <Loader />
        </div>
      )}
      {!loading && lcTickets.length === 0 && (
        <div className={classes['no-tickets']}>
          <p>Рейсов, подходящих под заданные фильтры, не найдено</p>
        </div>
      )}
      {lcTickets.slice(0, showMore).map((ticket) => {
        const uniqueKey = `${ticket.carrier}_${ticket.segments[0].origin}_${ticket.segments[1].destination}_${ticket.segments[0].date}`
        return <Ticket key={uniqueKey} ticket={ticket} />
      })}

      {lcTickets.length >= 5 && (
        <button className={classes.showmore} onClick={handleMoreTickets}>
          Показать еще
        </button>
      )}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    tickets: state.tickets,
    searchID: state.searchID,
    sortType: state.sortType,
    filter: state.filter,
    loading: state.loading,
    error: state.error,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(ticketActions, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TicketList)
