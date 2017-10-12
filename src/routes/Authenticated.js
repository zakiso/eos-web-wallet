import * as React from "react";
import { Redirect } from 'react-router-dom';

const Authenticated = Component => ({ auth = false, ...props }) => (
  (auth || process.env.NODE_ENV === "test") ?
    <Component {...props} />
    : <Redirect from={props.location.pathname} to="/login" />
);


export default Authenticated;