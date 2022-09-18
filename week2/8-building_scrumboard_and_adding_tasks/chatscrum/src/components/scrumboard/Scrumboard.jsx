import React, { Component, createRef } from 'react';
import { Data } from '../../static/dataInput';
import './scrumboard.css';

export class Scrumboard extends Component {
  ref = createRef(null);

  constructor() {
    super();
    this.state = {
      data: Data,
      isOpen: false,
      tasks: null
    }
  }

  outsideClick = ({target}) => {
    if (target == this.ref.current) {
      console.log('click outside class component')
      this.closeModal();
    } else if (this.ref.current.contains(target)) {
      console.log('click inside class component')
      this.closeModal();
    }
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.outsideClick);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.outsideClick);
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
      tasks: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      isOpen: false
    })

  }

  render() {
    console.log('Logged in as', Data.email);
    return (
      <div className='scrumboard'>
        <nav>
          <h2 className='scrumboard_title'>CHATSCRUM</h2>
          <div className='var'>
            <p>User type: {Data.usertype} </p>
            <p>Project Name: {Data.projectname}</p>
          </div>
        </nav>
        <div className="scrumboard_contents" onClick={this.outsideClick}>
          <p className='welcome_msg' id='info'>Hello {Data.fullname} Welcome to your Scrumboard</p>

          <div className="container">
            <div className="weekly box">
              <h3>Weekly Tasks</h3>
              <p id="box">{this.state.tasks}</p>
            </div>
            <div className="daily box">
              <h3>Daily Tasks</h3>
            </div>
          </div>

          <div id="modal" ref={this.ref} className={this.state.isOpen ? 'show' : 'hidden'}>
            <div className="modal_header">
              <h3>Add a new task</h3>
              <h3 id="close" onClick={() => this.closeModal()}>X</h3>
            </div>
            <form className='scrumboard__form' onSubmit={this.handleSubmit}>
              <input type="text" onChange={this.handleChange} />
              <button>CONFIRM</button>
            </form>
          </div>
          <button className={this.state.isOpen ? 'hidden' : 'add'} onClick={() => this.openModal()}>ADD TASK</button>
        </div>
      </div>
    )
  }
}

export default Scrumboard;