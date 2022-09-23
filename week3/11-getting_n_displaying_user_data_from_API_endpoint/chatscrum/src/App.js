import './App.css';
import SignUp from './components/sign-up/SignUp';
import SignIn from './components/sign-in/SignIn';
import Home from './components/home/Home';
import Scrumboard from './components/scrumboard/Scrumboard';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/signin' element={<SignIn />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/scrumboard' element={<Scrumboard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;