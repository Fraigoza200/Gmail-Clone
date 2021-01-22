import React, { useEffect } from 'react';
import './App.css';
import Header from './Components/Header'
import Sidebar from './Components/Sidebar'
import Mail from './Components/Mail'
import EmailList from './Components/EmailList'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import SendMail from './Components/SendMail';
import { useDispatch, useSelector } from 'react-redux';
import { selectSendMessageIsOpen } from './features/mailSlice';
import { login, selectUser } from './features/userSlice';
import Login from './Components/Login';
import { auth } from './Components/firebase';

function App() {

  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen)
  const user = useSelector(selectUser)
  const dispatch = useDispatch()

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if(user) {
          dispatch(login({
            displayName: user.displayName,
                email: user.email,
                photoUrl: user.photoURL
          }))
      } 
    })
  }, [])

return (
  <Router>

    {!user ? (
      <Login />
    ) : (
    <div className="app">
      <Header />

      <div className="app__body">
      <Sidebar />

      <Switch>
        <Route path='/mail'>
          <Mail />
        </Route>
        <Route path='/'>
          <EmailList />
        </Route>
      </Switch>
      </div>

      
    {sendMessageIsOpen && <SendMail />}
    </div>
    )}
  </Router>
  );
}

export default App;
