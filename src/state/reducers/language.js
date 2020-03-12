import { SET_LANGUAGE, TOGGLE_LANGUAGE_MODAL } from '../types'

const initialState = {
    lang: 'en',
    langModalIsOpen: false
}

export default (state = initialState, action)=>{
    switch(action.type){
        case SET_LANGUAGE:
            return {
                ...state,
                lang: action.payload.lang,
                flag: action.payload.flag
            }
            case TOGGLE_LANGUAGE_MODAL:
            return {
                ...state,
                langModalIsOpen: !state.langModalIsOpen
            }
        default:
            return state
    }
}
