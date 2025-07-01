import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AnalyticsDashboard from './pages/AnalyticsDashboard';
import ReportList from './components/ReportList';
import PerformanceChart from './components/PerformanceChart';

const App: React.FC = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={AnalyticsDashboard} />
                <Route path="/reports" component={ReportList} />
                <Route path="/performance" component={PerformanceChart} />
            </Switch>
        </Router>
    );
};

export default App;