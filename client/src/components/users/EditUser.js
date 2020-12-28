import React, { Component } from 'react'
import { connect } from 'react-redux'
import { editUser } from '../../actions'
import UserForm from './UserForm'

class EditUser extends Component {
    onSubmit = (formValues) => {
        this.props.editUser(this.props.match.params.id, formValues)
    }
    render() {
        console.log('UserEdit', this.props)
        if (!this.props.user) {
            <div>Loading...</div>
        }
        return (<>
            <div><h3>Edit User</h3></div>
            <div>
                {!!this.props.user && <UserForm onSubmit={this.onSubmit}
                    initialValues={{
                        fullname: this.props.user.fullname,
                        address: this.props.user.address,
                        birthdate: this.props.user.birthdate,
                        gender: this.props.user.gender,
                        hobbies: this.props.user.hobbies,
                        college: this.props.user.college
                    }} />}
            </div>
        </>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return { user: state.users[ownProps.match.params.id] }
}

export default connect(mapStateToProps, {
    editUser: editUser
})(EditUser)