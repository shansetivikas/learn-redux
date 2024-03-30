const redux = require('redux');
const configureStore = redux.createStore;
const applyMiddleware = redux.applyMiddleware;
const reduxLogger = require('redux-logger');
const logger = reduxLogger.createLogger();



const INCREMENT_COUNT = 'INCREMENT_COUNT';
const DECREMENT_COUNT = 'DECREMENT_COUNT';


//initial state
const initialState = {
    count: 0,
}


//actions

const incrementCount = () => {
    return {
        type: INCREMENT_COUNT
    }
}

const decrementCount = () => {
    return {
        type: DECREMENT_COUNT
    }
}

//reducer

const reducer = (state=initialState, action) => {
    switch(action.type) {
        case INCREMENT_COUNT:
          return {
                ...state,
               count: state.count+1
          }
          case DECREMENT_COUNT:
            return {
                ...state,
                count: state.count-1
            }
        default:
            return {
                ...state
            }

    }
}

const store = configureStore(reducer, applyMiddleware(logger));



store.dispatch(incrementCount())

console.log(store.getState());

store.dispatch(decrementCount())
