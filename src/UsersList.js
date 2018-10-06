import React, { Component } from 'react';
import ListGroupItem from './ListGroupItem';

class UsersList extends Component {

    state = {
        showNumberGames: true
    }

    render() {
        return (
            <div className='col-sm'>
                <div className='card'>
                  <div className='card-header'>
                    Users List
                  </div>
                  <div className='card-body'>
                    <div className='list-group'>
                        {
                            Object.keys(this.props.users).map((key) => (
                                <ListGroupItem
                                    key={this.props.users[key].username}
                                    username={this.props.users[key].username}
                                    firstName={this.props.users[key].firstName}
                                    lastName={this.props.users[key].lastName}
                                    numberGamesPlayed={this.state.showNumberGames ? this.props.users[key].numberGamesPlayed : '*'}
                                />
                            ))
                        }
                    </div>
                  </div>
                </div>
                <button
                    type='button'
                    className='btn btn-primary btn-block btn-toggle-hide'
                    onClick={this.toggleGamesPlayed}>{this.numberGamesText()}</button>
            </div>
        );
    }

    toggleGamesPlayed = () => {
        this.handleState();
    }

    handleState = () => {
      this.setState(prevState => ({
          ...prevState,
          showNumberGames: !prevState.showNumberGames
      }));
    }

    numberGamesText = () => {
        return this.state.showNumberGames
            ? 'Hide the Number of Games Played'
            : 'Show the Number of Games Played';
    }
}

export default UsersList;