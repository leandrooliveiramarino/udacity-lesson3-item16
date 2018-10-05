import React, { Component } from 'react';
import UsersList from './UsersList';
import AddUser from './AddUser';
import './App.css';

class App extends Component {

  state = {
    formMessage: {
      type: 'success',
      message: ''
    },
    userList: {}
  }

  render() {
    return (
      <React.Fragment>
        <h1 className='title'>Ranking</h1>
        <div className='row'>
            <AddUser handleSubmit={this.handleSubmit} formMessage={this.state.formMessage}/>
            <UsersList users={this.state.userList}/>
        </div>
      </React.Fragment>
    );
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = {
      firstName: form.elements['firstName'].value,
      lastName: form.elements['lastName'].value,
      username: form.elements['username'].value
    }

    if(!this.isFormValid(formData)) {
      this.handleFormMessage(
        'danger',
        'Please, fill all the options above or username has already been taken'
      );
      return;
    }

    this.addUserToList(formData);
    this.handleFormMessage(
      'success',
      'User successfully registered!'
    );
    form.reset();
  }

  addUserToList = (user) => {
    this.setState((prevState) => {
      prevState.userList[user.username] = user;
      return prevState;
    });
  }

  handleFormMessage = (type, message) => {
    this.setState((prevState) => {
        prevState.formMessage = {
          type: type,
          message: message
        };
        return prevState;
      });
  }

  isFormValid = (formData) => {
    if(this.state.userList.hasOwnProperty(formData.username)) {
      return false;
    }

    return !Object.keys(formData).filter((element) => {
      return formData[element] === '';
    }).length;
  }
}

export default App;
