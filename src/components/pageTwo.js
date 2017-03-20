import React from 'react';
import {Field, reduxForm} from 'redux-form';

import RenderField from './field';
import validate from './validate';

const FormPageTWO = (props) => {
  const {handleSubmit, prevPage} = props;
  return (
    <div className="page-two col-12 col-md-4 offset-md-4">
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
          <div className="row no-gutters">
            <div className="col-6">
              <button type="button" className="btn btn-default" onClick={prevPage}>Previous</button>
            </div>
            <div className="col-6 text-right">
              <button type="submit" className="btn btn-primary">Submit</button>
            </div>
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