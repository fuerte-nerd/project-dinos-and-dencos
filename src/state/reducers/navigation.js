import { TOGGLE_NAV, SET_NAV_STATE } from '../types'

const initialState = {
    navIsOpen: false
}

export default (state = initialState, action)=>{
    switch(action.type){
        case TOGGLE_NAV:
            return {
                ...state,
                navIsOpen: !state.navIsOpen
            }
        case SET_NAV_STATE:
            return{
                ...state,
                navIsOpen: action.payload
            }
        default:
            return state
    }
}