const { cakeActions } = require('../cake/cakeSlice')

const createSlice = require('@reduxjs/toolkit').createSlice

const initialState = {
    numOfIcreams: 30
}


const iceCreamSlice = createSlice({
    name: 'iceCream',
    initialState,
    reducers : {
        ordered: (state) => {
            state.numOfIcreams--
        },
        restocked: (state, action) => {
            state.numOfIcreams += state.numOfIcreams+action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(cakeActions.ordered, state => {
            state.numOfIcreams--
        })
    }
})

module.exports = iceCreamSlice.reducer;
module.exports.iceCreamActions = iceCreamSlice.actions;

