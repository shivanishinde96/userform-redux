import React, { Component } from 'react'
import Modal from '../Modal'
import history from '../../history'
import { connect } from 'react-redux'
import { deleteuser } from '../../actions'
import { Link } from 'react-router-dom'

class DeleteUser extends Component {
    renderContent() {
        if (!this.props.user) {
            return 'Are you sure you want to delete the user?'
        }
        return `Are you sure you want to delete the user with username : ${this.props.user.fullname}`
    }

    render() {
        const actions = (
            <React.Fragment>
                <button onClick={() => this.props.deleteuser(this.props.match.params.id)}
                    className='ui button negative'>Delete</button>
                <Link to='/' className='ui button'>Cancel</Link>
            </React.Fragment>
        )
        return (
            <>
                DeleteUser
                <Modal title='Delete User'
                    content={this.renderContent()}
                    actions={actions}
                    onDismiss={() => history.push('/')} />
            </>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return { user: state.users[ownProps.match.params.id] }
}

export default connect(mapStateToProps, { deleteuser: deleteuser })(DeleteUser)