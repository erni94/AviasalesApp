import React from "react";

import logo from '../../assets/Logo.svg';
import './app.css';

export default function App() {
    return (
        <div className="App">
            <div className='app-container'>
                <div className='header'>
                    <img src={logo} alt='Aviasales logo'/>
                </div>
                <div className="main">
                    <div className="filter">
                        <h3>Количество пересадок</h3>
                        <form>
                            <label>
                                <input type="checkbox" className='input visible-hide'/>
                                <span className="check-box">Все</span>
                            </label>

                        </form>
                    </div>
                    <div className="tabs"></div>
                    <div className="tickets-list">
                    </div>
                </div>

            </div>
        </div>
    );
}