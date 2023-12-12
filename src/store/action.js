import axios from 'axios';
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

/*const addTicket = (ticket) => {
    return {
        type: 'ADD_TICKET',
        ticket,
    };
};*/

const getSearchID = () => {
    return (dispatch)=>{
        axios.get('https://aviasales-test-api.kata.academy/search')
            .then((response)=>{
                dispatch({
                    type: 'ADD_SEARCH_ID',
                    searchID: response.data.searchId
                })
            })
    }

}

const getTickets = (searchID) => {
    return (dispatch)=>{
        axios.get(`https://aviasales-test-api.kata.academy/tickets?searchId=${searchID}`)
            .then((response)=>{
                dispatch({
                    type: 'ADD_TICKET',
                    tickets: response.data.tickets
                })
            })
    }
}


export { toggleFilter, toggleAllOn, toggleAllOff,changeSort, getSearchID, getTickets };

