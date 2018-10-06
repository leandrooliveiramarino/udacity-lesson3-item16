import React, { Component } from 'react';
import UsersList from './UsersList';
import AddUser from './AddUser';
import './App.css';

class App extends Component {

  state = {
    userList: {}
  }

  render() {
    return (
      <React.Fragment>
        <h1 className='title'>Ranking</h1>
        <div className='row'>
            <AddUser
              handleSubmit={this.handleSubmit}
              userList={this.state.userList}
            />
            <UsersList
              users={this.state.userList}
            />
        </div>
      </React.Fragment>
    );
  }

  addUserToList = (user) => {
    this.setState(prevState => ({
      userList: {
        ...prevState.userList,
        [user.username]: user
      }
    }));
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = {
      firstName: form.elements['firstName'].value,
      lastName: form.elements['lastName'].value,
      username: form.elements['username'].value,
      numberGamesPlayed: 0
    }

    this.addUserToList(formData);
  }
}

export default App;
