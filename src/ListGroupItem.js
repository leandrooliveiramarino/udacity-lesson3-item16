import React from 'react';
import PropTypes from 'prop-types';

function ListGroupItem(props) {
    return (
        <div className='list-group-item list-group-item-action flex-column align-items-start'>
            <div className='d-flex w-100 justify-content-between'>
                <h5 className='mb-1'>{props.username}</h5>
            </div>
            <p className='mb-1'>{`${props.firstName} ${props.lastName}`} | {props.numberGamesPlayed} game(s) played</p>
        </div>
    );
}

ListGroupItem.propTypes = {
    username: PropTypes.string.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    numberGamesPlayed: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ])
}

export default ListGroupItem;