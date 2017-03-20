import React from 'react';
import {Field, reduxForm} from 'redux-form';

import RenderField from '../components/field';
import validate from '../components/validate';

class FormPageONE extends React.Component {
  render() {
    const {handleSubmit} = this.props;
    return (
      <div className="page-one col-xs-12 col-md-4 offset-md-4">
        <div className="box">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <Field name="email" type="text" component={RenderField} label="Email"/>
            </div>
             <div className="text-center">
              <button type="submit" className="btn btn-primary btn-fw">Next</button>
            </div>
          </form>
        </div>
      </div>
    )
  }
};

//put data in 'SignupForm' and don't destroy it if this component is no longer active
export default reduxForm({
  form: 'SignupForm',
  destroyOnUnmount: false,
  validate
})(FormPageONE);