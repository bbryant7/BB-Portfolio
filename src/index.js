import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './styles/index.css';
import BaseLayout from './components/BaseLayout.js';
import App from './components/App';
import About from './components/About';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <BrowserRouter>
     <BaseLayout>
        <Switch>
          <Route exact path="/" component={App}/>
          <Route exact path="/portfolio/#portfolio" component={Portfolio}/>
          <Route exact path="/about/#about-page" component={About}/>
          <Route exact path="/contact/#contact" component={Contact}/>
          <Route exact path="/resume" component={Resume}/>
        </Switch>
      </BaseLayout>
    </BrowserRouter>


, document.getElementById('root'));
registerServiceWorker();
