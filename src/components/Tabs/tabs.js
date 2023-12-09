import React from "react";
import classes from "./tabs.module.scss";

export default function Tabs() {
    return(
        <div className={classes.tabs}>
            <div className={`${classes['tab-start']} ${classes.active}` }><p>Самый дешевый</p></div>
            <div className={classes.tab}><p>Самый быстрый</p></div>
            <div className={classes['tab-end']}><p>Оптимальный</p></div>
        </div>
    )
}