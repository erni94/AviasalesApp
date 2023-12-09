import React from "react";

import Filter from "../Filter/filter";
import Tabs from "../Tabs/tabs";
import TicketList from "../Ticket-list/ticket-list";


import logo from '../../assets/Logo.svg';
import classes from './app.module.scss';

export default function App() {
    return (
        <div className={classes.App}>
            <div className={classes.appContainer}>
                <div className={classes.header}>
                    <img src={logo} alt='Aviasales logo'/>
                </div>
                <div className={classes.main}>
                    <Filter/>
                    <Tabs/>
                    <TicketList/>
                </div>
            </div>
        </div>
    );
}