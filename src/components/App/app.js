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
                                <span className="check-box"></span>
                                Все
                            </label>
                            <label>
                                <input type="checkbox" className='input visible-hide'/>
                                <span className="check-box"></span>
                                Без пересадок
                            </label>
                            <label>
                                <input type="checkbox" className='input visible-hide'/>
                                <span className="check-box"></span>
                                1 пересадка
                            </label>
                            <label>
                                <input type="checkbox" className='input visible-hide'/>
                                <span className="check-box"></span>
                                2 пересадки
                            </label>
                            <label>
                                <input type="checkbox" className='input visible-hide'/>
                                <span className="check-box"></span>
                                3 пересадки
                            </label>
                        </form>
                    </div>


                    <div className="tabs">
                        <div className="tab-start active"><p>Самый дешевый</p></div>
                        <div className="tab"><p>Самый быстрый</p></div>
                        <div className="tab-end"><p>Оптимальный</p></div>
                    </div>


                    <div className="tickets-list">
                        <div className="ticket">
                           <div className="ticket-header">
                               <div className="price">13 000Р</div>
                               <div className="aviacompany">
                                   <img src='https://upload.wikimedia.org/wikipedia/commons/c/c2/S7_new_logo.svg' alt=''/>
                               </div>
                           </div>

                            <div className="ticket-data">
                                <div className="ticket-info">
                                    <p className='gray-text'>MOW – HKT</p>
                                    <p>10:45 – 08:00</p>
                                </div>
                                <div id='time' className="ticket-info">
                                    <p className='gray-text'>В пути</p>
                                    <p>21ч 15м</p>
                                </div>
                                <div id='transfer' className="ticket-info">
                                    <p className='gray-text'>2 пересадки</p>
                                    <p>HKG, JNB</p>
                                </div>
                            </div>

                            <div className="ticket-data">
                                <div className="ticket-info">
                                    <p className='gray-text'>MOW – HKT</p>
                                    <p>10:45 – 08:00</p>
                                </div>
                                <div id='time' className="ticket-info">
                                    <p className='gray-text'>В пути</p>
                                    <p>21ч 15м</p>
                                </div>
                                <div id='transfer' className="ticket-info">
                                    <p className='gray-text'>2 пересадки</p>
                                    <p>HKG, JNB</p>
                                </div>
                            </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
}