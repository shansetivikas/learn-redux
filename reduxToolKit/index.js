const store = require('./app/store');
const { iceCreamActions } = require('./features/icecream/iceCreamSlice');
const cakeActions  = require('./features/cake/cakeSlice').cakeActions;
const fetchUsers = require('./features/user/userSlice').fetchUsers;

// console.log('initial State', store.getState());

// store.subscribe(() => {
//     console.log("updated state", store.getState());
// })

// store.dispatch(cakeActions.ordered())
// store.dispatch(cakeActions.restocked(3))
// store.dispatch(iceCreamActions.ordered());

store.dispatch(fetchUsers());


