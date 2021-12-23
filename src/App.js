import { Switch, Route } from 'react-router';

import './App.css';

import Header from './components/Header';
import About from './pages/About';
import Home from './pages/Home';
import Projects from './pages/Projects';
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
        <Route path="/react-portifoly/projects">
          <Header />
          <Projects />
        </Route>
        <Route path="/react-portifoly/about">
          <Header />
          <About />
        </Route>
      </Switch>
    </>
  );
}

export default App;
