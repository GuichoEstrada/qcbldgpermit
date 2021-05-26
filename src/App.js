import './App.css';
import React from 'react';

import {BrowserRouter as Router, Switch, Link, Route} from 'react-router-dom';

import Header from './components/Header';
import Landing from './components/content/Landing';
import AppInfo from './components/content/AppInfo';
import PayOnline from './components/content/PayOnline';
import PayOnSite from './components/content/PayOnSite';
import StatusPage from './components/content/StatusPage';
import Footer from './components/Footer';

import theme from './components/Theme';
import { ThemeProvider } from '@material-ui/styles';

function App() {
  
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Router>
        <Switch>
          <Route exact path='/' component={Landing} />
          <Route path='/information' component={AppInfo} />
          <Route path='/payonline' component={PayOnline} />
          <Route path='/payonsite' component={PayOnSite} />
          <Route path='/status' component={StatusPage} />
        </Switch>
      </Router>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
