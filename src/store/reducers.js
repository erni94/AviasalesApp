const initialState = {
    filter: {
        all: true,
        noTransfer: true,
        oneTransfer: true,
        twoTransfers: true,
        threeTransfers: true,
    },
    sortType: 'lowPrice',
    tickets:[],
    searchID: null,
    loading: false,
    error: null,

};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'TOGGLE_FILTER':{
            return {
                ...state,
                filter: {
                    ...state.filter,
                    [action.filterName]: action.isChecked,
                }
            }
        }
        case 'TOGGLE_ALL_ON':{
            return {
                ...state,
                filter: {
                    all: true,
                    noTransfer: true,
                    oneTransfer: true,
                    twoTransfers: true,
                    threeTransfers: true,
                }
            }
        }
        case 'TOGGLE_ALL_OFF':{
            return {
                ...state,
                filter: {
                    all: false,
                    noTransfer: false,
                    oneTransfer: false,
                    twoTransfers: false,
                    threeTransfers: false,
                }
            }
        }
        case 'CHANGE_SORT':{
            return {
                ...state,
                sortType: action.sortType
            }

        }
        case 'ADD_TICKET':{
            return {
                ...state,
                tickets: [...state.tickets, ...action.tickets]
            }
        }
        case 'ADD_SEARCH_ID':{
            return {
                ...state,
                searchID: action.searchID
            }
        }

        case 'GET_TICKETS_START':{
            return {
                ...state,
                loading: true
            }
        }

        case 'GET_TICKETS_END':{
            return {
                ...state,
                loading: false
            }
        }

        case 'GET_TICKETS_ERROR':{
            return {
                ...state,
                error: action.error
            }
        }

        default:
            return state;
    }

}

export default reducer