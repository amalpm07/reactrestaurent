import { createStore,combaineReducers,applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { restaurantListReducer } from "./reducers/restaurantReducer";
//create reducer
const reducers=combineReducers({
restaurantReducer:restaurantListReducer
})
//create middleware
const middleware=[thunk]
//create store
const  store=createStore(reducers,applyMiddleware(...middleware))   //(...) spred operator to conver object into array




export default store