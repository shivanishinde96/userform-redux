import {ADD_USER,USERS_LIST,EDIT_USER,DELETE_USER} from '../actions/types'
import users from '../apis/users'
import { v4 as uuid } from 'uuid'
import history from '../history'

/*Action Creators*/
export const addUser=(formValues)=>{
    return async (dispatch)=>{
        const userId=uuid()
        const response=await users.post('/users',{...formValues,userId})
        dispatch({
            type:ADD_USER,
            payload:response.data
        })
        history.push('/')
    }
}

export const listAllUsers=()=>{
    return async (dispatch)=>{
        const response=await users.get('/users')
        dispatch({
            type:USERS_LIST,
            payload:response.data
        })
    }
}

export const editUser=(id,formValues)=>{
    return async (dispatch)=>{
        const response=await users.patch(`/users/${id}`,formValues)
        dispatch({
            type:EDIT_USER,
            payload:response.data
        })
        history.push('/')
    }
}

export const deleteuser=(id)=>{
    return async (dispatch)=>{
        await users.delete(`/users/${id}`)
        dispatch({
            type:DELETE_USER,
            payload:id
        })
        history.push('/')
    }
}