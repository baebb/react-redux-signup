import axios from 'axios';

export const CREATE_POST = 'CREATE_POST';

const ROOT_URL = 'https://hooks.zapier.com/hooks/catch/2024381/mpxj0a/';
const postConfig = {headers: {'Content-Type': 'application/x-www-form-urlencoded'}};

export function submitForm(props) {
  const updatedProps = props;
  updatedProps.ref_by = 'ross';
  //axios serializes our form object and makes a post request to a dummy URL (as a promise)
  const request = axios.post(`${ROOT_URL}`, updatedProps, postConfig);

  return {
    type: CREATE_POST,
    payload: request
  };
  //using redux-promise we can apply middleware to transform promises into response data
}