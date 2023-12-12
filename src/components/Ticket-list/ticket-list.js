import React, { useEffect, useState } from "react";

import {connect} from "react-redux";
import { bindActionCreators } from "redux";
import * as ticketActions from "../../store/action";
import {sortByPrice, sortByDuration, sortByPriceAndDuration, filterTicketsByStops, getArrayFilter} from "../../utils/sortAndFilterFunc";

import Ticket from "../Ticket/ticket";
import classes from './ticket-list.module.scss';

const TicketList = ({tickets, actions, sortType, filter}) => {

    const [lcTickets, setLcTickets] = useState([]);

    useEffect(() => {
        const arrayFilter = getArrayFilter(filter);

        if (sortType === 'lowPrice') {
            setLcTickets(sortByPrice((filterTicketsByStops(tickets, arrayFilter))));
        } else if (sortType === 'lowDuration') {
            setLcTickets(sortByDuration((filterTicketsByStops(tickets, arrayFilter))));
        } else if (sortType === 'lowPriceDuration') {
            setLcTickets(sortByPriceAndDuration((filterTicketsByStops(tickets, arrayFilter))));
        }
    }, [tickets, filter, sortType]);


    console.log(lcTickets);


    return (
        <div className={classes['ticket-list']}>

            {lcTickets.slice(0, 5).map((ticket, index) => {
                const uniqueKey = `${ticket.carrier}_${ticket.segments[0].origin}_${ticket.segments[1].destination}_${ticket.segments[0].date}`;
                return (
                    <Ticket key={uniqueKey} ticket={ticket}/>
                )
            })}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        tickets: state.tickets,
        searchID: state.searchID,
        sortType: state.sortType,
        filter: state.filter
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(ticketActions, dispatch),
    };
}

export default connect( mapStateToProps, mapDispatchToProps )(TicketList)