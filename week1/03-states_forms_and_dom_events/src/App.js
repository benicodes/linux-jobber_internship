import React from 'react';


class App extends React.Component {
  constructor () {
    super();
    this.state = {
      user: 'Benison',
      message: 'Please fill out this form',
      text: '',
      question: 'What will like to do?'
    }

    this.handleChange = (e) => {
      this.setState({
        text: e.target.value
      })
    }

    this.handleSubmit = (e) => {
      e.preventDefault();
      this.setState({
        message: ''
      })
      console.log(`hello ${this.state.user}, your form submission is successful.`)
    }

    this.handleClick = (e) => {
      console.log('uploading.')
    }
    this.handleAbort = (e) => {
      console.log('upload aborted.')
    }
    this.handleMouseOver = (e) => {
      console.log('button mouseover.')
    }
    this.handleCopy = (e) => {
      console.log('You have copied my contents.')
    }
  }
  render() {
    return (
      <div>
        <h1>Welcome {this.state.user} </h1>
        <p>{this.state.message}</p>

        <form onSubmit={this.handleSubmit}>
          <input placeholder='Your message here...' type='text' onChange={this.handleChange} />
          <button>Submit</button>
        </form>
        <hr />
        <div>
          <p>{this.state.question}</p>
          <button onClick={this.handleClick}>Start Upload</button>
          <button onClick={this.handleAbort}>Stop Upload</button>
          <button onMouseOver={this.handleMouseOver}>Mouse over Me</button>
          <p onCopy={this.handleCopy}>Every button clicked will show the action taken on the console, including this random dummy information</p>
        </div>
      </div>
    )
  }
}

export default App;