import { Fragment , useState } from 'react';
import {Routes , Route} from 'react-router-dom'

import Sidebar from './Sidebar';
import Navigation from './home-page/Navigation'
import Homepage from './home-page/Homepage';
import Plans from './plans/Plans'
// CSS Styling
import './styles/app.scss'
import './styles/App.css';
import { useEffect } from 'react';

function App() {
  const [authenticated , isAuthenticated] = useState(null)

  const user = {
    id: 1,
    username: "Admin",
    full_name: "Nick Mendez",
    email: "nicholasmendez10@gmail.com",
    account_type: "admin",
    credits: 2394
  }

  useEffect(()=>{
    isAuthenticated(false)
  },[])

  return (
    <Fragment>
      {(authenticated === false) && <Navigation />}
      {authenticated && <Sidebar user={user}/>}
      <Routes>
        <Route path="/" element={<Homepage />}/>
        <Route path="/plans" element={<Plans />} />
      </Routes>
    </Fragment>
  );
}

export default App;
