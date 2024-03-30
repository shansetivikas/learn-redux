
const redux = require('redux');
// const createStore = redux.createStore;
const configureStore = redux.createStore;
const combineReducer = redux.combineReducers;
const applyMiddleware = redux.applyMiddleware;

const reduxLogger = require('redux-logger');
const logger = reduxLogger.createLogger();

const CAKE_ORDERED = "CAKE_ORDERED";
const CAKE_RESTOCKED = "CAKE_RESTOCKED";
const ICECREM_ORDERED = "ICECREM_ORDERED";
const ICECREM_RESTOCKED= "ICECREM_RESTOCKED";
//store 
 const initialState = {
    numOfIceCreams: 10,
    numOfCakes: 10
}


// Action Creator
function orderCake()
 {
    //Action
    return {
        type: CAKE_ORDERED,
        payload: 1
    }
 }

 function restockCake(quantity) {
    return {
        type: CAKE_RESTOCKED,
        payload: quantity
    }
 }

 function orderIcecream()
 {
    //Action
    return {
        type: ICECREM_ORDERED,
        payload: 1
    }
 }

 function restockIceCream(quantity) {
    return {
        type: ICECREM_RESTOCKED,
        payload: quantity
    }
 }

 


 //Reducer
// reducer (prevState, action) => newState
 const IceCreamReducer = (state=initialState, action) => {
    switch(action.type) {
        case CAKE_ORDERED:
            return {
                ...state,
                numOfCakes: state.numOfCakes-action.payload
            }
        case CAKE_RESTOCKED:
            return {
                ...state,
                 numOfCakes: state.numOfCakes+action.payload
            }  
        case ICECREM_ORDERED:
                return {
                    ...state,
                    numOfIceCreams: state.numOfIceCreams-action.payload
                } 
        case ICECREM_RESTOCKED:
            return {
                ...state,
                numOfIceCreams: state.numOfIceCreams+action.payload
            }
        default:
            return state
    }
 }

 const CakeReducer = (state=initialState, action) => {
    switch(action.type) {
        case CAKE_ORDERED:
            return {
                ...state,
                numOfCakes: state.numOfCakes-action.payload
            }
        case CAKE_RESTOCKED:
            return {
                ...state,
                 numOfCakes: state.numOfCakes+action.payload
            }  
        case ICECREM_ORDERED:
                return {
                    ...state,
                    numOfIceCreams: state.numOfIceCreams-action.payload
                } 
        case ICECREM_RESTOCKED:
            return {
                ...state,
                numOfIceCreams: state.numOfIceCreams+action.payload
            }
        default:
            return state
    }
 }

 const rootReducer = combineReducer({
    cake: CakeReducer,
    icecream: IceCreamReducer
 });

//  const store = configureStore(reducer);
const store = configureStore(rootReducer, applyMiddleware(logger));

// store.subscribe(() => {
//     console.log('updated state', store.getState());
// })
 
store.dispatch(orderCake());
store.dispatch(restockCake(2));
store.dispatch(orderIcecream());

store.dispatch({
    type: CAKE_ORDERED,
    payload: 1
  })

