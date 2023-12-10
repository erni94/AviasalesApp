import React from "react";
import {connect} from "react-redux";
import { bindActionCreators } from "redux";
import * as filterActions from "../../store/action";

import classes from './filter.module.scss';

const Filter = ({filterState, actions}) => {

    const {
        toggleFilter,
        toggleAllOn,
        toggleAllOff,
    } = actions;

    const handleToggleAll = (isChecked) => {
        if (isChecked) {
            toggleAllOn();
        } else {
            toggleAllOff();
        }
    };

    const handleToggleFilter = (filterName, isChecked) => {

        const copyFilterState = {...filterState};
        copyFilterState[filterName] = isChecked;
        const allFiltersChecked =
            copyFilterState.noTransfer &&
            copyFilterState.oneTransfer &&
            copyFilterState.twoTransfers &&
            copyFilterState.threeTransfers;

        if (!isChecked && filterState.all) {
            toggleFilter('all', false);
            toggleFilter(filterName, isChecked);
        } else if(allFiltersChecked){
            toggleAllOn();
        }
        else {
            toggleFilter(filterName, isChecked);
        }
    };


    return(
        <div className={classes.filter}>
            <h3>Количество пересадок</h3>
            <form>
                <label>
                    <input type="checkbox"
                           className={`${classes['visible-hide']} ${classes.input}`}
                           checked={filterState.all}
                           onChange={(e) => handleToggleAll(e.target.checked)}
                    />
                    <span className={classes['check-box']}></span>
                    Все
                </label>
                <label>
                    <input type="checkbox"
                           className={`${classes['visible-hide']} ${classes.input}`}
                           checked={filterState.noTransfer}
                           onChange={(e) => handleToggleFilter('noTransfer', e.target.checked)}
                    />
                    <span className={classes['check-box']}></span>
                    Без пересадок
                </label>
                <label>
                    <input type="checkbox"
                           className={`${classes['visible-hide']} ${classes.input}`}
                           checked={filterState.oneTransfer}
                           onChange={e => handleToggleFilter('oneTransfer', e.target.checked)}
                    />
                    <span className={classes['check-box']}></span>
                    1 пересадка
                </label>
                <label>
                    <input type="checkbox"
                           className={`${classes['visible-hide']} ${classes.input}`}
                           checked={filterState.twoTransfers}
                           onChange={(e) => handleToggleFilter('twoTransfers', e.target.checked)}
                    />
                    <span className={classes['check-box']}></span>
                    2 пересадки
                </label>
                <label>
                    <input type="checkbox"
                           className={`${classes['visible-hide']} ${classes.input}`}
                           checked={filterState.threeTransfers}
                           onChange={(e) => handleToggleFilter('threeTransfers', e.target.checked)}
                    />
                    <span className={classes['check-box']}></span>
                    3 пересадки
                </label>
            </form>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        filterState: state.filter,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(filterActions, dispatch),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter)