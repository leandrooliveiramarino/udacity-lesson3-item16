import React, { Component } from 'react';

class ListGroupItem extends Component {
    render() {
        return (
            <div className='list-group-item list-group-item-action flex-column align-items-start'>
                <div className='d-flex w-100 justify-content-between'>
                    <h5 className='mb-1'>leandromarino07</h5>
                </div>
                <p className='mb-1'>Leandro Marino | 0 game(s) played</p>
            </div>
        );
    }
}

export default ListGroupItem;