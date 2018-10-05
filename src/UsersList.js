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
                      <ListGroupItem/>
                    </div>
                  </div>
                </div>
                <button type='button' className='btn btn-primary btn-block btn-toggle-hide'>Hide the Number of Games Played</button>
            </div>
        );
    }
}

export default UsersList;