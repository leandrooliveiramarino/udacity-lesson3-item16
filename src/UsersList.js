import React, { Component } from 'react';
import ListGroupItem from './ListGroupItem';

class UsersList extends Component {
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
                                    formattedNumberPlayedGames={this.props.users[key].formattedNumberPlayedGames}
                                />
                            ))
                        }
                    </div>
                  </div>
                </div>
                <button type='button' className='btn btn-primary btn-block btn-toggle-hide' data-show="1" onClick={this.props.toggleGamesPlayed}>Hide the Number of Games Played</button>
            </div>
        );
    }
}

export default UsersList;