import React from 'react';
import './App.css';
import Header from './Components/Header'
import Sidebar from './Components/Sidebar'
import Mail from './Components/Mail'
import EmailList from './Components/EmailList'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import SendMail from './Components/SendMail';

function App() {
return (
  <Router>
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

      <SendMail />
    </div>
  </Router>
  );
}

export default App;
