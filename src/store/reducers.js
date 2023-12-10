const initialState = {
    filter: {
        all: false,
        noTransfer: false,
        oneTransfer: false,
        twoTransfers: false,
        threeTransfers: false,
    },
    sortType: 'lowPrice',
    ticket:[]

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
                ticket: [...state.ticket, action.ticket]
            }
        }
        default:
            return state;
    }

}

export default reducer