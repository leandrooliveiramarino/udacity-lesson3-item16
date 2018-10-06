import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FormMessage from './FormMessage.js';

class AddUser extends Component {

    static propTypes = {
      handleSubmit: PropTypes.func.isRequired,
      userList: PropTypes.object.isRequired
    }

    state = {
      firstName: '',
      lastName: '',
      username: '',
      formMessage: {
        type: 'success',
        message: ''
      }
    }

    handleInput = (event) => {
      const input = event.target;

      if(input.name === 'username' && this.props.userList.hasOwnProperty(input.value)) {
        this.handleFormMessage(
          'danger',
          'Username has already been taken.'
        );
      } else {
        this.handleFormMessage(
          'danger',
          ''
        );
      }

      this.setState(prevState => ({
        [input.name]: input.value
      }));
    }

    handleFormMessage = (type, message) => {
      this.setState(prevState => ({
          formMessage: {
            type: type,
            message: message
          }
        }));
    }

    isButtonDisabled = () => {
      const { firstName, lastName, username } = this.state;

      return firstName === ''
        || lastName === ''
        || username === ''
        || this.props.userList.hasOwnProperty(username);
    }

    handleSubmit = (event) => {
      this.props.handleSubmit(event);
      this.setState(prevState => ({
        ...prevState,
        firstName: '',
        lastName: '',
        username: ''
      }));
    }

    render() {
        return (
            <div className='col-sm'>
                <div className='card'>
                  <div className='card-header'>
                    Add User
                  </div>
                  <form onSubmit={this.handleSubmit}>
                      <div className='card-body'>
                        <div className='form-group'>
                            <input type='text'
                              className='form-control'
                              id='firstName'
                              name='firstName'
                              aria-describedby='Enter your first name here'
                              placeholder='First Name'
                              value={this.state.firstName}
                              onChange={this.handleInput}
                            />
                        </div>
                        <div className='form-group'>
                            <input
                              type='text'
                              className='form-control'
                              id='lastName'
                              name='lastName'
                              aria-describedby='Enter your last name here'
                              placeholder='Last Name'
                              value={this.state.lastName}
                              onChange={this.handleInput}
                            />
                        </div>
                        <div className='form-group'>
                            <input
                              type='text'
                              className='form-control'
                              id='username'
                              name='username'
                              aria-describedby='Enter your username here'
                              placeholder='Username'
                              value={this.state.username}
                              onChange={this.handleInput}
                            />
                        </div>
                        <button
                          type='submit'
                          className='btn btn-primary btn-block'
                          disabled={this.isButtonDisabled()}
                        >Add
                        </button>
                        <br/>
                        <FormMessage formMessage={this.state.formMessage}/>
                      </div>
                  </form>
                </div>
            </div>
        );
    }
}

export default AddUser;