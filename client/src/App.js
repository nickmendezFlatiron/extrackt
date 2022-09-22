import { Fragment , useState , useEffect } from 'react';
import {Routes , Route, Navigate} from 'react-router-dom'
import {LoginContext} from './context/LoginContext'
import CollectionContext from './context/CollectionContext'

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


function App() {

  const [authenticated , isAuthenticated] = useState(null)
  const [toggleModal , setToggleModal] = useState(false)
  const [user , setUser] = useState(null)
  const [errors , setErrors] = useState(null)
  const [collection , setCollection] = useState(null)
  const handleClose = () => {
    setToggleModal(false)
    setErrors([])
  };
  const handleShow = () =>  {
    setToggleModal(true)
    setErrors([])
  };


  const navigate = <Navigate replace to="/" />
  const spinner =   <Spinner animation="border" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </Spinner>

 
  useEffect(()=>{
    fetch("/authorize")
      .then(r =>{
        if(r.ok){
          r.json().then(user => {
            setUser(user)
            isAuthenticated(true)
          })
        } else {
          r.json().then(errors=>{
            setErrors(errors[0])
            isAuthenticated(false)
          })
        }
      })
  },[])
 
  if(isAuthenticated === null) return spinner
  
  return (
    <Fragment>
      <LoginContext.Provider value={{setUser , user , authenticated , isAuthenticated , errors, setErrors, spinner, navigate}}>
        {(authenticated === false) && <Navigation handleShow={handleShow} handleClose={handleClose} toggleModal={toggleModal}/>}
        {authenticated && <Sidebar user={user} setUser={setUser} isAuthenticated={isAuthenticated}/>}
          <CollectionContext.Provider value={{collection, setCollection}}>
        <Routes >
          <Route path="/" element={<Homepage />}/>
          <Route path="/signup" element={<SignupForm handleShow={handleShow}/>}/>
          <Route path="/plans" element={<Plans />} />
          <Route path="about" element={<About />} />
          <Route path="marketplace" exact element={ <Marketplace collection={collection}/>}>
          </Route>
          <Route path="marketplace/:id" element={<Collection collection={collection} />} />
          <Route path='user/:username' exact element={<Account user={user} spinner={spinner}/>}>
              <Route path="downloads" exact element={<Downloads />}/>
          </Route>
              <Route path="/user/:username/samples" exact element={<Samples />}/>
          <Route path="/upload" element={<UploadForm />} />
          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
          </CollectionContext.Provider>
      </LoginContext.Provider>
    </Fragment>
  );
}

export default App;
