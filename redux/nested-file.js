
const redux = require('redux');
const produce  = require('immer').produce;

const configureStore = redux.createStore;

const initialState = {
    name: 'Vikas',
     address: {
        street: 'test',
        city: 'hyd'
     }
}

const STREET_UPDATED = 'STREET_UPDATED'

const updatedStreet = (street) => {
    return {
        type : STREET_UPDATED,
        payload: street
    }
}

const reducer = (state=initialState, action)  => {
    switch(action.type) {
        case STREET_UPDATED:
            // return {
            //     ...state,
            //     address: {
            //         ...state.address,
            //         street: action.payload
            //     },
            // }
            return produce(state, (draft) => {
                draft.address.street = action.payload,
                draft.address.city="bangalore"
            })
        default: {
            return state
        }
    }
}

const store = configureStore(reducer);

console.log('Initial State', store.getState());
store.subscribe(() => {
    console.log('Updated Store ', store.getState());
})

store.dispatch(updatedStreet('45 Main Street'));