import React, { useState ,useEffect} from 'react';
import jwt from 'jsonwebtoken';
import cookie from 'react-cookies';

// const API = process.env.REACT_APP_APIROOT; 
const API = 'https://ravenmoore-testapi.herokuapp.com'
const REACT_APP_SECRET = '0e685cda6da196e88e484cf5f557e64579b6fbce2e1df90b3d15be244736722d'
export const UserContext = React.createContext();

function LoginProvider(props){
  const [user, setUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);


  useEffect(() => {
    console.log(`useEffect loggedin says: `, loggedIn);
  }, [loggedIn])


  const login = (username, password) => {
    console.log(username,password)
    fetch(`${API}/signin`, {
      method: 'post',
      mode: 'cors', 
      cache: 'no-cache',
      headers: new Headers({
        'Authorization': `Basic ${btoa(`${username}:${password}`)}`
      }),
    })
    .then(response => {
      console.log("im a response to login", response)
      // console.log('response from server', response);
      return response.json();
    })
    .then(logedUser => {
      console.log('user', logedUser);
      validateToken(logedUser.user.token,logedUser);
      
    })
  }
  console.log(user, 'userstate')

  const validateToken = (token, logedUser) => {
    console.log('11token11',token,'22user22',logedUser)
    try {
      let user = jwt.verify(token, REACT_APP_SECRET);
      console.log(user, 'after jwt')
      setLogInState(true, token, logedUser);
      return;
    }
    catch {
      setLogInState(false, null, {});
    }
  }
// we know loggedin is true, token is good,logedUser has token and user with userdata.
  const setLogInState = (loggedIn, token, logedUser) => {
    console.log("user 40",logedUser.user,"token____",token)
    cookie.save('auth', token, logedUser);
    setLoggedIn(loggedIn);
    console.log('setloggedin',loggedIn)

    // we break here
    setUser(logedUser.user);
    console.log(user, 'is user state')
  }

  const state = {
    user, 
    loggedIn,
    login: login
  }
  console.log(state, 'this was state')

  return(
    <UserContext.Provider value={state}>
      {props.children}
    </UserContext.Provider>
  )
}

export default LoginProvider