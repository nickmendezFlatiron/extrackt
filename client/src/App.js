import { Fragment , useState , useEffect } from 'react';
import {Routes , Route , Navigate} from 'react-router-dom'
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

// TEMP FILES
import cover from "./assets/stock-album-2.jpg"



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
  const collection = {
    collection_id: 1,
    collection_name: "Fire Samples Vol. 2",
    artwork: cover,
    downloads: 12930,
    user_id: 1,
    created_at: new Date(),
    updated_at: Date.now() ,
    user: user.username,
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
        <Route path="/marketplace" exact element={<Marketplace />}>
        </Route>
        <Route path="/marketplace/:collection_id" element={<Collection collection={collection} />} />
        <Route path=':username' exact element={<Account user={user}/>}>
            <Route path="downloads" element={<Downloads />}/>
            <Route path="samples" element={<Samples />}/>
        </Route>
        <Route path="/upload" element={<UploadForm />} />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </Fragment>
  );
}

export default App;
