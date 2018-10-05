import React, { Component } from 'react';

function FormMessage(props) {
    return (
        <div className={`alert alert-${props.formMessage.type} font-weight-bold ${!props.formMessage.message && 'd-none'}`} role='alert'>
          {props.formMessage.message}
        </div>
    );
}

export default FormMessage;