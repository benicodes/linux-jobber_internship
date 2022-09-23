import React, { Component } from 'react';
import './scrumboard.css';

export class AddTask extends Component {

    state = {
        content: ""
    }

    openModal = () => {
        this.setState({
            isOpen: true,
        })
    }

    closeModal = () => {
        this.setState({
            isOpen: false,
        })
    }

    handleChange = (e) => {
        this.setState({
            content: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({
            isOpen: false,
        })
        this.props.addTask(this.state)
        this.state.content = ""
    }

    render() {
        return (
            <div className='addTask'>
                <div id="modal" className={this.state.isOpen ? 'show' : 'hidden'}>
                    <div className="modal_header">
                        <h3>Add a new task</h3>
                        <h3 id="close" onClick={() => this.closeModal()}>X</h3>
                    </div>
                    <form className='scrumboard__form' onSubmit={this.handleSubmit}>
                        <input type="text" onChange={this.handleChange} value={this.state.content} />
                        <button>CONFIRM</button>
                    </form>
                </div>
                <button className={this.state.isOpen ? 'hidden' : 'add'} onClick={() => this.openModal()}>ADD TASK</button>
            </div>
        )
    }
}

export default AddTask;