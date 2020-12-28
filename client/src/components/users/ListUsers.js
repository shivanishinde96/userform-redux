import React, { Component } from 'react'
import { connect } from 'react-redux'
import { listAllUsers } from '../../actions'
import { Link } from 'react-router-dom'

class ListUsers extends Component {
    componentDidMount() {
        console.log(this.props)
        this.props.listAllUsers()
    }
    usersList() {
        return (
            <table className="ui fixed single line celled table">
                {this.props.users && this.props.users.map((user) => (
                    <>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>FullName</th>
                                <th>Address</th>
                                <th>Birthdate</th>
                                <th>Gender</th>
                                <th>Hobbies</th>
                                <th>College</th>
                                <th>UPDATE</th>
                                <th>DELETE</th>
                            </tr>
                        </thead>
                        <tbody key={user.id}>
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.fullname}</td>
                                <td>{user.address}</td>
                                <td>{user.birthdate}</td>
                                <td>{user.gender}</td>
                                <td>{user.hobbies+','}</td>
                                <td>{user.college}</td>
                                <td><Link to={`/users/edituser/${user.id}`} className='ui button secondary'>Edit</Link></td>
                                <td><Link to={`/users/deleteuser/${user.id}`} className='ui button negative'>Delete</Link></td>
                            </tr>
                        </tbody>
                    </>))}
            </table>)
    }
    render() {
        return (
            <div>
                <h1>Users List</h1>
                <i className="user icon"></i><Link to='/users/adduser' className='ui button primary'> Add User</Link>
                {this.usersList()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state)
    return { users: Object.values(state.users).reverse() }
}

export default connect(mapStateToProps, { listAllUsers: listAllUsers })(ListUsers)