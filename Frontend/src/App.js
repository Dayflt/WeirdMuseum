import React, { useState } from 'react'
import { BrowserRouter, Route } from 'react-router-dom';
import "bootswatch/dist/sketchy/bootstrap.min.css";
import Home from './page/Home';
import Home2 from './page/Home2';
import Record from './page/Record';
import Result from './page/Result';
import Selection from './page/Selection';
import Preview from './page/Preview';
import Gallery from './page/Gallery';

export const Bdata = React.createContext({
  Blob : new Blob()
});

export const Burl = React.createContext({
  Blob : new Blob()
});

export const Setb = React.createContext(() => {});
export const Setburl = React.createContext(() => {});

const App = () => {
  const [blob, setb] = useState(new Blob());
  const [burl, setburl] = useState();
  return (
    <BrowserRouter>
      <Bdata.Provider value={blob}>
        <Setb.Provider value={setb}>
          <Burl.Provider value={burl}>
            <Setburl.Provider value={setburl}>
              <Route path="/" component={Home2} exact={true}/>
              <Route path="/Home2" component={Home}/>
              <Route path="/selection" component={Selection} />
              <Route path="/result/" component={Result} />
              <Route path="/gallery" component={Gallery} />
              <Route path="/Preview/:num" component={Preview} />
              <Route path="/Record/:num" component={Record} />
            </Setburl.Provider>
          </Burl.Provider>
        </Setb.Provider>
      </Bdata.Provider>
    </BrowserRouter>
  );
};

export default App;