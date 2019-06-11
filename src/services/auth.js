import { WebAuth } from 'auth0-js';

const auth0 = new WebAuth({
  domain: process.env.AUTH0_DOMAIN,
  clientID: process.env.AUTH0_CLIENT,
  redirectUri: process.env.AUTH0_CALLBACK,
  responseType: 'token id_token',
  scope: 'openid'
});

// if user !logged in, this will send them to auth0 for login/signup
export const login = () => {
  auth0.authorize();
};

export const handleAuth = () => {
  return new Promise(/* stuff goes in here */);
};
