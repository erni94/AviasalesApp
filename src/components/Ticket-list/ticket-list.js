import React from "react";
import Ticket from "../Ticket/ticket";
import classes from './ticket-list.module.scss';

export default function TicketList() {
    return (
        <div className={classes['ticket-list']}>
            <Ticket/>
            <Ticket/>
            <Ticket/>
            <Ticket/>
        </div>
    )
}