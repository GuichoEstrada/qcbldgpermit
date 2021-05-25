import './App.css';
import React from 'react';

import Header from './components/Header';
import Landing from './components/content/Landing';
import Footer from './components/Footer';

import theme from './components/Theme';
import { ThemeProvider } from '@material-ui/styles';

function App() {
  
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Landing />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
