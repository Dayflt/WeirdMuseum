import React, { useState } from 'react'
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './page/Home';
import Record from './page/Record';
import Result from './page/Result';
import Selection from './page/Selection';
import Preview from './page/Preview';
import Gallery from './page/Gallery';

export const Bdata = React.createContext({
  Blob : new Blob()
});

export const Setb = React.createContext(() => {});

const App = () => {
  const [blob, setb] = useState();
 // const [url, seturl] = useState();
  return (
    <BrowserRouter>
      <Bdata.Provider value={blob}>
        <Setb.Provider value={setb}>
          <Route path="/" component={Home} exact={true}/>
          <Route path="/selection" component={Selection} />
          <Route path="/result/:model" component={Result} />
          <Route path="/gallery" component={Gallery} />
          <Route path="/Preview/:num" component={Preview} />
          <Route path="/Record/:num" component={Record} />
        </Setb.Provider>
      </Bdata.Provider>
    </BrowserRouter>
  );
};

export default App;