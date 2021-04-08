import Header from '../Header';
import DisplayData from '../DisplayData';
import './Main.scss';
import { Route, Switch } from 'react-router';
import Historical from '../Historical';
import Models from '../Models';
import Notes from '../Notes';
import Maintenance from '../Maintenance';

function Main() {
    
    
    return (
        <div className="main">
            <Header />
            <Switch>
                <Route path="/main/historical" component={Historical} />
                <Route path="/main/models" component={Models} />
                <Route path="/main/teams" component={<h2>teams</h2>} />
                <Route path="/main/locations" component={<h2>locations</h2>} />
                <Route path="/main/notes" component={Notes} />
                <Route path="/main/maintenance" component={Maintenance} />
                <Route path="/main/reports/damage" component={<h2>damage</h2>} />
                <Route path="/main/reports/goals" component={<h2>goals</h2>} />
                <Route path="/main/yields" component={<h2>yields</h2>} />
                <Route path="/main/financial" component={<h2>financial</h2>} />       
            </Switch>
        </div>
    );
}

export default Main;
