import { Fragment , useState , useEffect } from 'react';
import {Routes , Route} from 'react-router-dom'
import {LoginContext} from './context/LoginContext'
// import Protected from './Protected'

import Sidebar from './Sidebar';
import Navigation from './home-page/Navigation'
import Homepage from './home-page/Homepage';
import Plans from './plans/Plans'
import About from './About'
import Collection from './marketplace/Collection';
import Marketplace from './marketplace/main-view/Marketplace'
import UploadForm from "./upload/UploadForm";
import Downloads from './user-files/Downloads'
import Samples from './user-files/Samples'
import Account from './user-files/Account'
import SignupForm from './home-page/SignupForm';

import Spinner from 'react-bootstrap/Spinner'


// CSS Styling
import './styles/app.scss'
import './styles/App.css';


// TEMP FILES
import cover from "./assets/stock-album-2.jpg"



function App() {
  const [authenticated , isAuthenticated] = useState(null)
  const [toggleModal , setToggleModal] = useState(false)

  const handleClose = () => setToggleModal(false);
  const handleShow = () =>  setToggleModal(true);

  const spinner =   <Spinner animation="border" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </Spinner>

  const user = {
    id: 1,
    username: "Admin",
    full_name: "Nick Mendez",
    email: "nicholasmendez10@gmail.com",
    account_type: "admin",
    credits: 2394
  }
  const collection = {
    id: 1,
    collection_name: "Fire Samples Vol. 2",
    artwork: cover,
    downloads: 12930,
    user_id: 1,
    created_at: new Date(),
    updated_at: Date.now() ,
    user: user.username,
  }
  useEffect(()=>{
    isAuthenticated(false)
  },[])

  if(isAuthenticated === null) return spinner

  return (
    <Fragment>
      {(authenticated === false) && <Navigation handleShow={handleShow} handleClose={handleClose} toggleModal={toggleModal}/>}
      {authenticated && <Sidebar user={user}/>}
      <Routes>
        <Route path="/" element={<Homepage toggleModal={toggleModal} />}/>
        <Route path="/signup" element={<SignupForm handleShow={handleShow}/>}/>
        <Route path="/plans" element={<Plans />} />
        <Route path="about" element={<About />} />
        <Route path="marketplace" exact element={ <Marketplace collection={collection}/>}>
        </Route>
        <Route path="marketplace/:id" element={<Collection collection={collection} />} />
        <Route path='user/:username' exact element={<Account user={user}/>}>
            <Route path="downloads" element={<Downloads />}/>
            <Route path="samples" element={<Samples />}/>
        </Route>
        <Route path="/upload" element={<UploadForm />} />
        {/* <Route path="*" element={<Navigate replace to="/" />} /> */}
      </Routes>
    </Fragment>
  );
}

export default App;
