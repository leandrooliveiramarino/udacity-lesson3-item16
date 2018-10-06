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
            <UsersList users={this.state.userList} toggleGamesPlayed={this.toggleGamesPlayed}/>
        </div>
      </React.Fragment>
    );
  }

  handleNumberPlayedGameTo = (show) => {

    const userList = Object.keys(this.state.userList).reduce((carry, username) => {
      const user = this.state.userList[username];
      user.formattedNumberPlayedGames = show
        ? this.state.userList[username].numberPlayedGames
        : '*';

      if(!carry) {
        return {
          [username]: user
        }
      }

      carry[username] = user;
      return carry;
    }, null);

    this.setState((prevState) => {
      prevState.userList = userList;
      return prevState;
    })
  }

  toggleGamesPlayed = (event) => {
    const button = event.target;
    const show = Number(button.dataset.show);
    this.handleNumberPlayedGameTo(!show);

    button.innerText = !show
      ? 'Hide the Number of Games Played'
      : 'Show the Number of Games Played'

    button.dataset.show = show
      ? 0
      : 1;
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = {
      firstName: form.elements['firstName'].value,
      lastName: form.elements['lastName'].value,
      username: form.elements['username'].value,
      formattedNumberPlayedGames: 0,
      numberPlayedGames: 0
    }

    if(!this.isFormValid(formData)) {
      this.handleFormMessage(
        'danger',
        'Please, fill all the options above.'
      );
      return;
    }

    if(this.state.userList.hasOwnProperty(formData.username)) {
      this.handleFormMessage(
        'danger',
        'Username has already been taken.'
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
    return !Object.keys(formData).filter((element) => {
      return formData[element] === '';
    }).length;
  }
}

export default App;
