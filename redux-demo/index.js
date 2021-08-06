const redux = require('redux')

const createStore = redux.createStore
console.log('From Redux Demo !!')

const BUY_CAKE = 'BUY_CAKE'


function buyCake(){
    return {
        type: BUY_CAKE,
         info: 'First Redux Action'
    }
}

const initialState = {
    noOfCakes : 10
}

// reducer -- (previousState,action) => newState

const reducer = (state = initialState, action) => {
    switch(action.type){
        case BUY_CAKE : return {
            ...state,
            noOfCakes: state.noOfCakes - 1
        }
        default : return state
    }
}

const store = createStore(reducer)
console.log('Initial state ',store.getState())
const unsubscribe = store.subscribe(() => console.log('updated state', store.getState()))
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
unsubscribe()