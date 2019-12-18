import React from 'react';
import Thun from './thun-invers.jpg';
import Bern from './bern.jpg';
import './App.css';
import Masthead from '@ta-interaktiv/react-masthead';
import '@ta-interaktiv/semantic-ui/semantic/dist/components/reset.css';
import '@ta-interaktiv/semantic-ui/semantic/dist/components/site.css';


import Stream from '../Stream';
import Footer from '../Footer';


function App() {
  return (
    <div className="App red">
      <Masthead articleId='16267582'/>
      <div className="wrapper">
        <img className = "headerImage" src={Bern} alt="Bern"></img>
        <h1>Das war<br/>2019</h1>
        <div className="lead">Harry turned and saw something monstrous cutting through the water toward them: a human body in swimming trunks with the head of a shark. Der Jahresrückblick für die Region Bern</div>
        <Stream />
        <Footer />
      </div>
    </div>
  );
}

export default App;
