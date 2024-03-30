// state = {
//     loading: true,
//     data: [],
//     error: ''
// }

// loading - Display a loading spinner in your component
// data - List of Users
// error - Display error to the user

// ACTIONS
// ---------
// FETCH_USERS_REQUESTED - Fetch List of Users
// FETCH_USERS_SUCCEDDED - Fetched Successfully
// FETCH_USERS_FAILED - Error Fetching the data

// REDUCERS

// case FETCH_USERS_REQUESTED
//       loading: true
// case FETCH_USERS_SUCCEDED
//        loading: false
//        users: data (from API)
// case FECTCH_USERS_FAILED
//        loading: false
//        error : error (from API)

const redux = require('redux');
const thunkMiddleware = require('redux-thunk').thunk;
const createStore = redux.createStore;
const applyMiddleware = redux.applyMiddleware;
const axios = require('axios');


const initialState = {
    loading: true,
    data: [],
    error: ''
}

const FETCH_USERS_REQUESTED = 'FETCH_USERS_REQUESTED'
const FETCH_USERS_SUCCEDDED = 'FETCH_USERS_SUCCEDDED'
const FETCH_USERS_FAILED = 'FETCH_USERS_FAILED'

const fetchUsersRequest = () => {
    return {
        type: FETCH_USERS_REQUESTED
    }
}

const fetchUsersSuccess = users => {
   return {
        type: FETCH_USERS_SUCCEDDED,
        payload: users
   }    
}

const fetchUsersFailure = error => {
    return {
         type: FETCH_USERS_FAILED,
         payload: error
    }    
 }
 

 const reducer = (state=initialState, action) => {
    switch(action.type) {
        case FETCH_USERS_REQUESTED:
            return {
                ...state,
                loading: true
            }
        case FETCH_USERS_SUCCEDDED: 
            return {
                loading: false,
                users: action.payload,
                error: ''
            }
        case FETCH_USERS_FAILED:
            return {
                loading: false,
                users: [],
                error: action.payload
            }
    }
 }

 const fetchUsers = () => {
    store.dispatch(fetchUsersRequest());
    return (dispatch) => {
        axios.get('https://jsonplaceholder.typicode.com/users').then(response => {
                //response.data is users
                const users = response.data.map((user) => user.id)
                dispatch(fetchUsersSuccess(users))
        }).catch(error => {
                //error message
                dispatch(fetchUsersFailure(error.message));
        });
    }
 }

 const store = createStore(reducer, applyMiddleware(thunkMiddleware));


 store.subscribe(()=>console.log(store.getState()));

 store.dispatch(fetchUsers());