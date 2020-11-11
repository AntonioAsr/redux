const initialState = {
    loading: false,
    books: [],
    error: ""
}

const FETCH_BOOKS_REQUEST = "FETCH_BOOKS_REQUEST";
const FETCH_BOOKS_SUCCESS = "FETCH_BOOKS_SUCCESS";
const FETCH_BOOKS_ERROR = "FETCH_BOOKS_ERROR";


const fetchBooksRequest = () => {
    return {
        type: FETCH_BOOKS_REQUEST
    }
}

const fetchUsersSuccess = (users) => {
    return {
        type: FETCH_BOOKS_SUCCESS,
        payload: users
    }
}

const fetchUsersError = (error) => {
    return {
        type: FETCH_BOOKS_ERROR,
        payload: error
    }
}

const asyncActionReducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_BOOKS_REQUEST: 
            return {
                ...state,
                loading: true
            }

        case FETCH_BOOKS_SUCCESS: 
            return {
                ...state,
                users: action.payload,
                loading: false
            }

        case FETCH_BOOKS_REQUEST: 
            return {
                ...state,
                loading: false,
                error: action.payload
            }
            
        default: return state
    }
}

export default asyncActionReducer;