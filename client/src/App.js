import { Fragment } from 'react';
import {Routes , Route} from 'react-router-dom'

import Sidebar from './Sidebar';
import Homepage from './home-page/Homepage';
// CSS Styling
import './styles/app.scss'
import './styles/App.css';

function App() {

  const user = {
    id: 1,
    username: "Admin",
    full_name: "Nick Mendez",
    email: "nicholasmendez10@gmail.com",
    account_type: "admin",
    credits: 2394
  }

  return (
    <Fragment>
      <Sidebar user={user}/>
      <Routes>
        <Route path="/" element={<Homepage />}/>
      </Routes>
    </Fragment>
  );
}

export default App;
