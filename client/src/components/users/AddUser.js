import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addUser } from '../../actions'

import UserForm from './UserForm'

class AddUser extends Component {
    onSubmit = (formValues) => {
        console.log('formValues', formValues)
        this.props.addUser(formValues)
    }
    render() {
        return (
            <>
                <div><h3>Add User</h3></div>
                <div>
                    <UserForm onSubmit={this.onSubmit} />
                </div>
            </>
        )
    }
}

export default connect(null, {
    addUser: addUser
})(AddUser)

