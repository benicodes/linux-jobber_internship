import React, { Component, createRef } from 'react';
import { Data } from '../../static/dataInput';
import './scrumboard.css';
import Tasks from '../tasks/Tasks';
import AddTask from './AddTask';
import Users from '../users/Users';
import axios from 'axios';
import {nanoid} from 'nanoid'

export class Scrumboard extends Component {

  constructor(props) {
    super(props);

    this.state = {
      data: Data,
      isOpen: false,
      tasks: []
    }
  }

  // addTask = (task) => {
  //   //task.id = nanoid().toString(36).slice(2,9)
  //   task.id = Math.random().toString(36).slice(2,9)
  //   let tasks = [ ...this.state.tasks, task ]
  //   this.setState({
  //     tasks
  //   })
  //   console.log(task)
  // }

  deleteTask = (id) => {
    const tasks = this.state.tasks.filter(task => {
      return this.id != id
    })
    this.setState({
      tasks
    })
  }

  baseUrl = 'http://liveapi.chatscrum.com/scrum/api/scrumgoals/'

  componentDidMount() {
    axios.get(this.baseUrl)
      .then(res => {
        this.setState({
          tasks: res.data
        })
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
        <div className="scrumboard_contents">
          <p className='welcome_msg' id='info'>Hello {Data.fullname} Welcome to your Scrumboard</p>

          <Tasks data={this.state.tasks} deleteTask={this.deleteTask} />

          <AddTask addTask={this.addTask} />

          <Users />
        </div>
      </div>
    )
  }
}

export default Scrumboard;