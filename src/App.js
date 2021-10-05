import { Switch, Route } from 'react-router';
import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import Skills from './pages/Skills';

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/react-portifoly">
          <Header />
          <Home />
        </Route>
        <Route path="/react-portifoly/skills">
          <Header />
          <Skills />
        </Route>
      </Switch>
    </>
  );
}

export default App;
