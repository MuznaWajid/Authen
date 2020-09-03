import React from 'react';
 
import { NavLink } from 'react-router-dom';
 
const Navigation = () => {
    return (
       <div>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/login">login</NavLink>
          <NavLink to="/signup">Signup</NavLink>
       </div>
    );
}
 
export default Navigation;