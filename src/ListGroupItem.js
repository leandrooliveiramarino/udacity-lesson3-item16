import React, { Component } from 'react';

class ListGroupItem extends Component {
    render() {
        return (
            <div className='list-group-item list-group-item-action flex-column align-items-start'>
                <div className='d-flex w-100 justify-content-between'>
                    <h5 className='mb-1'>{this.props.username}</h5>
                </div>
                <p className='mb-1'>{`${this.props.firstName} ${this.props.lastName}`} | {this.props.formattedNumberPlayedGames} game(s) played</p>
            </div>
        );
    }
}

export default ListGroupItem;