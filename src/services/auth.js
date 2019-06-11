import { WebAuth } from 'auth0-js';

const auth0 = new WebAuth({
  domain: 'mcnadams.auth0.com',
  clientID: 'URjY6vA053cfXESJ0h7V27NzyhPsSFHh',
  redirectUri: 'http://localhost:7890/callback',
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
