import React, { Component } from 'react';
import FormMessage from './FormMessage.js';

class AddUser extends Component {
    render() {
        return (
            <div className='col-sm'>
                <div className='card'>
                  <div className='card-header'>
                    Add User
                  </div>
                  <form onSubmit={this.props.handleSubmit}>
                      <div className='card-body'>
                        <div className='form-group'>
                            <input type='text' className='form-control' id='firstName' aria-describedby='Enter your first name here' placeholder='First Name' />
                        </div>
                        <div className='form-group'>
                            <input type='text' className='form-control' id='lastName' aria-describedby='Enter your last name here' placeholder='Last Name' />
                        </div>
                        <div className='form-group'>
                            <input type='text' className='form-control' id='username' aria-describedby='Enter your username here' placeholder='Username' />
                        </div>
                        <button type='submit' className='btn btn-primary btn-block'>Add</button>
                        <br/>
                        <FormMessage formMessage={this.props.formMessage}/>
                      </div>
                  </form>
                </div>
            </div>
        );
    }
}

export default AddUser;