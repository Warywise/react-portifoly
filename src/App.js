import { Switch, Route } from 'react-router';
import './App.css';
import Header from './components/Header';
import Home from './pages/Home';

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Header />
          <Home />
        </Route>
      </Switch>
    </>
  );
}

export default App;
