import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AttemptExam from './pages/AttemptExam';
import ResultsPage from './pages/ResultsPage';

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/attempt-exam" component={AttemptExam} />
        <Route path="/results" component={ResultsPage} />
      </Switch>
    </Router>
  );
};

export default App;