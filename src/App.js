import React from 'react'
import './App.css'
import Home from './components/Home';
import CreateMentor from './components/CreateMentor';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import CreateStudent from './components/CreateStudent';
import AssignStudent from './components/AssignStudent';
import AssignMentor from './components/AssignMentor';
import MetorAllStudent from './components/metorAllStudent';

function App() {
  return (
    <>
    <Router>
      <Switch>
        <Route path="/" component={Home} exact /> 
        <Route path="/create-mentor" component={CreateMentor} exact /> 
        <Route path="/create-student" component={CreateStudent} exact /> 
        <Route path="/assign-student/:id" component={AssignMentor} exact /> 
        <Route path="/assign-mentor/:id" component={AssignStudent} exact /> 
        <Route path="/perticular-mentor" component={MetorAllStudent} exact /> 

      </Switch>
    </Router>

    </>
  );
}

export default App;

