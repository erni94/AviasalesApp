import React from "react";
import classes from './ticket.module.scss';
import {convertDuration, convertDate, transferCount} from "../../utils/timeFunc";

export default function Ticket({ticket}) {

    const imgUrl = 'https://pics.avs.io/99/36/'

    return(
        <div className={classes.ticket}>
            <div className={classes['ticket-header']}>
                <div className={classes.price}>{ticket.price.toLocaleString('ru-RU')} Р</div>
                <div className={classes.aviacompany}>
                    <img src={ticket.carrier ? `${imgUrl}${ticket.carrier}.png` : null} alt={ticket.carrier}/>
                </div>
            </div>

            <div className={classes['ticket-data']}>
                <div className={classes['ticket-info']}>
                    <p className={classes['gray-text']}>{`${ticket.segments[0].origin} - ${ticket.segments[0].destination}`}</p>
                    <p>{convertDate(ticket.segments[0].date, ticket.segments[0].duration)}</p>
                </div>
                <div id='time' className={classes['ticket-info']}>
                    <p className={classes['gray-text']}>В пути</p>
                    <p>{convertDuration(ticket.segments[0].duration)}</p>
                </div>
                <div id='transfer' className={classes['ticket-info']}>
                    <p className={classes['gray-text']}>{transferCount(ticket.segments[0].stops)}</p>
                    <p>{ticket.segments[0].stops.join(', ')}</p>
                </div>
            </div>

            <div className={classes['ticket-data']}>
                <div className={classes['ticket-info']}>
                    <p className={classes['gray-text']}>{`${ticket.segments[1].origin} - ${ticket.segments[1].destination}`}</p>
                    <p>{convertDate(ticket.segments[1].date, ticket.segments[1].duration)}</p>
                </div>
                <div id='time' className={classes['ticket-info']}>
                    <p className={classes['gray-text']}>В пути</p>
                    <p>{convertDuration(ticket.segments[1].duration)}</p>
                </div>
                <div id='transfer' className={classes['ticket-info']}>
                    <p className={classes['gray-text']}>{transferCount(ticket.segments[1].stops)}</p>
                    <p>{ticket.segments[1].stops.join(', ')}</p>
                </div>
            </div>


        </div>
    )
}