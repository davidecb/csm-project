//import logo from '../../assets/logo.svg';
import './App.scss';
import Login from '../Login';
import Main from '../Main';
import store from '../../redux/store';
import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'

function App() {

  return (
    <BrowserRouter>
      <Provider store={store}>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/main" component={Main} />
          </Switch>               
        </div>
      </Provider>
    </BrowserRouter>   
  );
}

export default App;

 /*   */
