import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import QuestionBank from './pages/QuestionBank';
import QuestionList from './components/QuestionList';
import ImportExport from './components/ImportExport';

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={QuestionBank} />
        <Route path="/questions" component={QuestionList} />
        <Route path="/import-export" component={ImportExport} />
      </Switch>
    </Router>
  );
};

export default App;