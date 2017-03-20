import React from 'react';
import {Field, reduxForm} from 'redux-form';

import RenderField from '../components/field';
import validate from '../components/validate';

const FormPageTWO = (props) => {
  const {handleSubmit} = props;
  return (
    <div className="page-two col-xs-12 col-md-4 offset-md-4">
      <div className="box">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <Field name="fname" type="text" component={RenderField} label="First name"/>
          </div>
          <div className="form-group">
            <Field name="lname" type="text" component={RenderField} label="Last name"/>
          </div>
          <div className="form-group">
            <Field name="phone" type="text" component={RenderField} label="Mobile phone"/>
          </div>
          <div className="text-center">
            <button type="submit" className="btn btn-primary btn-fw">Next</button>
          </div>
        </form>
      </div>
    </div>
  )
};

//push data to existing form 'SignupForm' and validate it
export default reduxForm({
  form: 'SignupForm',
  destroyOnUnmount: false,
  validate
})(FormPageTWO);