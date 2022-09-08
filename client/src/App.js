import { Fragment , useState } from 'react';
import {Routes , Route} from 'react-router-dom'
import Protected from './Protected'

import Sidebar from './Sidebar';
import Navigation from './home-page/Navigation'
import Homepage from './home-page/Homepage';
import Plans from './plans/Plans'
import About from './About'
import Collection from './marketplace/Collection';
import Marketplace from './marketplace/Marketplace'
import UploadForm from "./upload/UploadForm";
import Downloads from './user-files/Downloads'
import Samples from './user-files/Samples'
import Account from './user-files/Account'

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
    isAuthenticated(true)
  },[])

  return (
    <Fragment>
      {(authenticated === false) && <Navigation />}
      {authenticated && <Sidebar user={user}/>}
      <Routes>
        <Route path="/" element={<Homepage />}/>
        <Route path="/plans" element={<Plans />} />
        <Route path="about" element={<About />} />
        <Route path="/marketplace" element={<Marketplace />}>
          <Route path=":collection" element={<Collection />} />
        </Route>
        <Route path='/:username' element={<Account user={user}/>}>
            <Route path="downloads" element={<Downloads />}/>
            <Route path="samples" element={<Samples />}/>
        </Route>
        <Route path="/upload" element={<UploadForm />} />
      </Routes>
    </Fragment>
  );
}

export default App;
