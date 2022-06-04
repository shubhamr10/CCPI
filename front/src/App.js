import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { useEffect } from "react";
import Routing from './components/routing/Routing';
import store from './store';

function App() {
  return (
    <Provider store={store}>
        <Router>
          <Routes>
            <Route exact path='*' element={<Routing/>}/>
          </Routes>
        </Router>
    </Provider>
  );
}

export default App;
