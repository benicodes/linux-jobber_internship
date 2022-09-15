import './App.css';
import SignUp from './components/sign-up/sign-up';
import SignIn from './components/sign-in/sign-in';

function App() {
  return (
    <div className="App">
      <h1>CHATSCRUM</h1>
      <SignUp />
      <SignIn />
    </div>
  );
}

export default App;