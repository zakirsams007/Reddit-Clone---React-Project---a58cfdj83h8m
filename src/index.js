import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Auth0Provider } from "@auth0/auth0-react";


ReactDOM.render(
  <>
  <Auth0Provider
    domain="dev-flcqx2vs0ilacfob.us.auth0.com"
    clientId="v7IHJ3rL3DUVF4KJnWggy1M6VXjE4egL"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>
  </>,
  document.getElementById('root')
);


