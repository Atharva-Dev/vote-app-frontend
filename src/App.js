import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import VoterLogin from './components/VoterLogin/VoterLogin';
import AdminLogin from './components/AdminLogin/AdminLogin';
import AdminControl from './components/AdminControl/AdminControl';
import Vote from './components/Vote/Vote';



function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<VoterLogin/>}/>
      </Routes>
      <Routes>
        <Route path="/admin-login" element={<AdminLogin/>}/>
      </Routes>
      <Routes>
        <Route path="/admin-control" element={<AdminControl/>}/>
      </Routes>
      <Routes>
        <Route path="/vote" element={ <Vote/> }/>
      </Routes>
    </Router>
  )

}

export default App;
