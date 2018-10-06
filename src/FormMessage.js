import React from 'react';
import PropTypes from 'prop-types';

function FormMessage(props) {
  return (
    <div className={`alert alert-${props.formMessage.type} font-weight-bold text-center ${!props.formMessage.message && 'd-none'}`} role='alert'>
    {props.formMessage.message}
    </div>
    );
}

FormMessage.propTypes = {
    formMessage: PropTypes.object.isRequired
}

export default FormMessage;