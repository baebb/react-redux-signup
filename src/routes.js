import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from './components/app';
import SignupForm from './containers/signupForm';
import ThankYou from './components/thankyou';

//set up parent app and set indexRoute to marketing form
export default (
  <Route path="/" component={App}>
    <IndexRoute component={SignupForm}/>
    <Route path="thankyou" component={ThankYou}/>
  </Route>
);
