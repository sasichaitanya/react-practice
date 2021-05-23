// importing all the dependencies
const redux = require('redux');
// redux logger is used to log previous state and current state when a chnage in store
const reduxLogger = require('redux-logger')

// creating instances for imported 
const createStore = redux.createStore;
const combineReducers = redux.combineReducers;
const applyMiddleware = redux.applyMiddleware;
const logger = reduxLogger.createLogger();

// action creater types
const BUY_CAKE = 'BUY_CAKE';
const BUY_ICECREAM = 'BUY_ICECREAM';

// this is action
function buyCake() {
  return {
    type: BUY_CAKE,
    info: 'First redux action'
  }
}
function buyIcecream() {
  return {
    type: BUY_ICECREAM,
    info: 'First redux action'
  }
}

// initilizing the required states 
const initialCakeState = {
  noOfCakes: 10
}
const initialIcecreamState = {
  noOfIcecreams: 20
}

// declare the reducer functions 
const cakeReducer = (state = initialCakeState, action) => {
  switch (action.type) {
    case BUY_CAKE: return {
      ...state,
      noOfCakes: state.noOfCakes - 1
    }

    default: return state;
  }
}
const icecreamReducer = (state = initialIcecreamState, action) => {
  switch (action.type) {
    case BUY_ICECREAM: return {
      ...state,
      noOfIcecreams: state.noOfIcecreams - 1
    }

    default: return state;
  }
}

//before creating store first combine reducers
const rootReducer = combineReducers({
  cakeReducer,
  icecreamReducer
})

// create a store with combined reducer and middleware included
const store = createStore(rootReducer, applyMiddleware(logger))

// used to get the current state
console.log('initial state ', store.getState())

// subscribe to store so that any change in state , will get updated
const unsubscribe = store.subscribe(() => {
  // console.log('State is Updated', store.getState())
})

// dispatching the actions
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIcecream())
store.dispatch(buyIcecream())

// unsubscribing the store 
unsubscribe()
console.log('Unsubscribed ! Wont get Unpades after unsubscribing')

store.dispatch(buyIcecream())
