import React from "react";
import classes from './ticket.module.scss';

export default function Ticket() {
    return(
        <div className={classes.ticket}>
            <div className={classes['ticket-header']}>
                <div className={classes.price}>13 000Р</div>
                <div className={classes.aviacompany}>
                    <img src='https://upload.wikimedia.org/wikipedia/commons/c/c2/S7_new_logo.svg' alt=''/>
                </div>
            </div>

            <div className={classes['ticket-data']}>
                <div className={classes['ticket-info']}>
                    <p className={classes['gray-text']}>MOW – HKT</p>
                    <p>10:45 – 08:00</p>
                </div>
                <div id='time' className={classes['ticket-info']}>
                    <p className={classes['gray-text']}>В пути</p>
                    <p>21ч 15м</p>
                </div>
                <div id='transfer' className={classes['ticket-info']}>
                    <p className={classes['gray-text']}>2 пересадки</p>
                    <p>HKG, JNB</p>
                </div>
            </div>

            <div className={classes['ticket-data']}>
                <div className={classes['ticket-info']}>
                    <p className={classes['gray-text']}>MOW – HKT</p>
                    <p>10:45 – 08:00</p>
                </div>
                <div id='time' className={classes['ticket-info']}>
                    <p className={classes['gray-text']}>В пути</p>
                    <p>21ч 15м</p>
                </div>
                <div id='transfer' className={classes['ticket-info']}>
                    <p className={classes['gray-text']}>2 пересадки</p>
                    <p>HKG, JNB</p>
                </div>
            </div>


        </div>
    )
}