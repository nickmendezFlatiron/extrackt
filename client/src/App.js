import { Fragment } from 'react';
import Sidebar from './Sidebar';

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
    </Fragment>
  );
}

export default App;
