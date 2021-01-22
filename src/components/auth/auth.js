import React, {useEffect,useState,useContext} from 'react';
import {UserContext} from '../context/userContext';


function Auth(props){
  const[authRender,setAuthRender] = useState(false);
  const userContext = useContext(UserContext);

  console.log('userContext.user', userContext)
  useEffect(()=>{
    setAuthRender(
      userContext.loggedIn && (props.role ? userContext.user.role.includes(props.role):false)
    )
  },[props.role ,userContext.user.role,userContext.loggedIn])

  return(
    authRender && <div>{props.children}</div>
  )
}
export default Auth;