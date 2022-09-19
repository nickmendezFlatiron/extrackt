import React from 'react' 
import { Navigate } from 'react-router-dom';

const Protected = ({authenticated , children}) => {

  if (!authenticated  ) {
    return <Navigate to="/" />;
    }
  
    return children;
}

export default Protected