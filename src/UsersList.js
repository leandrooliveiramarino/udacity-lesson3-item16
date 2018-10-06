import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ListGroupItem from './ListGroupItem';

class UsersList extends Component {

    static propTypes = {
      userList: PropTypes.object.isRequired
    }

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
                            Object.keys(this.props.userList).map((key) => (
                                <ListGroupItem
                                    key={this.props.userList[key].username}
                                    username={this.props.userList[key].username}
                                    firstName={this.props.userList[key].firstName}
                                    lastName={this.props.userList[key].lastName}
                                    numberGamesPlayed={this.state.showNumberGames
                                      ? this.props.userList[key].numberGamesPlayed
                                      : '*'}
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