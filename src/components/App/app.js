import React, { useEffect } from "react";

import Filter from "../Filter/filter";
import Tabs from "../Tabs/tabs";
import TicketList from "../Ticket-list/ticket-list";

import {connect} from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../../store/action";

import logo from '../../assets/Logo.svg';
import classes from './app.module.scss';

const App = ({searchID, tickets, actions}) => {

    const {getSearchID, getTickets} = actions;

    useEffect(() => {
        if (!searchID) {
            getSearchID();
        } else {
            // Если searchID есть, вызываем получение билетов
            getTickets(searchID);
        }
    }, [searchID, getSearchID, getTickets]);


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

const mapStateToProps = (state) => {
    return{
        searchID: state.searchID,
        tickets: state.tickets
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(actions, dispatch),
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(App)