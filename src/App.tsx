import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import './App.css';
import { Link } from './components/styled/Link';
import Menu from './components/styled/Menu';
import Advanced from './pages/Advanced';
import Home from './pages/Home';
import { NotFoundPage } from './pages/NotFoundPage';

function App() {

  return (
    <ThemeProvider
      theme={{
        primary: "#111111",
        accent: "#E8E8E8",
        brand: "#E08568",
        error: "#D8000C",
        light: "#C0C0C0",
      }}
    >
    <Menu>
      <Link to="/">Home</Link>
      <Link to="/advanced">Advanced</Link>
      </Menu>
    <div className="container">
      
       <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/advanced" component={Advanced} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
    </ThemeProvider>
  );
}

export default App;
