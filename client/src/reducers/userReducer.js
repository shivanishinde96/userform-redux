import {ADD_USER,USERS_LIST,EDIT_USER, DELETE_USER} from '../actions/types'
import _ from 'lodash'

const userReducer=(state={},action)=>{
    switch(action.type){
        case ADD_USER:
            return {...state,[action.payload.id]:action.payload}
        case USERS_LIST:
            return {...state, ..._.mapKeys(action.payload, 'id')};
        case EDIT_USER:
            return {...state,[action.payload.id]:action.payload}
        case DELETE_USER:
            return  _.omit(state,action.payload)
        default:
            return state
    }
}

export default userReducer