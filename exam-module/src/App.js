import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Exam from './components/Exam';
import './App.css';

function App() {
    return (
        <Router>
            <div>
                <Navbar />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/exam/:id" component={Exam} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;