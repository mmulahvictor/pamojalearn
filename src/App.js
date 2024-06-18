import './App.css';
import SignUp from './user_authentication_and_security/signUp';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>PamojaLearn</h1>
        <SignUp />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
