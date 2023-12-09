import React from "react";

import classes from './filter.module.scss';

export default function Filter() {
    return(
        <div className={classes.filter}>
            <h3>Количество пересадок</h3>
            <form>
                <label>
                    <input type="checkbox" className={`${classes['visible-hide']} ${classes.input}`}/>
                    <span className={classes['check-box']}></span>
                    Все
                </label>
                <label>
                    <input type="checkbox" className={`${classes['visible-hide']} ${classes.input}`}/>
                    <span className={classes['check-box']}></span>
                    Без пересадок
                </label>
                <label>
                    <input type="checkbox" className={`${classes['visible-hide']} ${classes.input}`}/>
                    <span className={classes['check-box']}></span>
                    1 пересадка
                </label>
                <label>
                    <input type="checkbox" className={`${classes['visible-hide']} ${classes.input}`}/>
                    <span className={classes['check-box']}></span>
                    2 пересадки
                </label>
                <label>
                    <input type="checkbox" className={`${classes['visible-hide']} ${classes.input}`}/>
                    <span className={classes['check-box']}></span>
                    3 пересадки
                </label>
            </form>
        </div>
    )
}