import React, { Component } from 'react';
import axios from 'axios';
import './users.css';

export class Users extends Component {
    constructor() {
        super();

        this.state = {
            users: [],
            loading: true,
        }
    }

    toggleModal = () => {
        if (this.state.isOpen) {
            this.setState({
                isOpen: false
            })
        } else {
            this.setState({
                isOpen: true
            })
        }
    }

    componentDidMount() {
        axios.get('http://liveapi.chatscrum.com/scrum/api/scrumusers/')
            .then(res => {
                this.setState({
                    users: res.data
                })
            })
    }

    render() {
        return (
            <div className='main'>
                <h4 onClick={() => this.toggleModal()}>Connected Users</h4>
                <div id='user-list' ref={this.ref} className={this.state.isOpen ? 'show' : 'hidden'}>
                    {this.state.users.map(({ nickname, id }) => {
                        return (
                            <div className='user' key={id}>
                                <span><i className='fas fa-user'></i></span>
                                {nickname}
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default Users