import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import VoterLogin from './components/VoterLogin/VoterLogin';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<VoterLogin/>}/>
      </Routes>
    </Router>
  )

}

export default App;
