import logo from './assets/img/Logo.svg';
import './App.css';

function App() {
  return (
    <div className="App-container">
      <header className="App-header">
        <img src={logo} className="kayak-logo" alt="logo" />
        <h1>Airlines</h1>
      </header>

      <h4>Filter by Alliances</h4>
      <div className='App-radio-container' >
        <div>
          <input type="radio" />
          <label htmlFor="">OneWorld</label>
        </div>
        <div>
          <input type="radio" />
          <label htmlFor="">Sky Team</label>
        </div>
        <div>
          <input type="radio" />
          <label htmlFor="">Star Alliance</label>
        </div>

      </div>


    </div>
  );
}

export default App;
