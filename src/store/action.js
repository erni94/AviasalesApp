const toggleFilter = (filterName, isChecked) => {
    return {
        type: 'TOGGLE_FILTER',
        filterName,
        isChecked,
    };
};

const toggleAllOn = () => {
    return {
        type: 'TOGGLE_ALL_ON',
    };
};

const toggleAllOff = () => {
    return {
        type: 'TOGGLE_ALL_OFF',
    };
}

const changeSort = (sortType) => {
    return {
        type: 'CHANGE_SORT',
        sortType,
    };
};

const addTicket = (ticket) => {
    return {
        type: 'ADD_TICKET',
        ticket,
    };
};

export { toggleFilter, toggleAllOn, toggleAllOff,changeSort, addTicket };

