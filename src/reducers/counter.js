import Action from '../actions'
import { combineReducers } from 'redux';

var initialState = {
    couter: 0,
    text: ''
}

const counterReducer = (state = initialState, action) => {
    console.log(Action.INCREMENT);

    switch (action.type) {
        case Action.INCREMENT:
            return {
                couter: state.couter + 1,
                text: action.text
            }
        case Action.DECREMENT:
            return {
                couter: state.couter - 1,
                text: action.text
            }
        default:
            return state
    }
}
export default combineReducers({
    counterReducer
})