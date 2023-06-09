
// import './App.css';
import Body from './Body/Body';
import Nav from './Navigation/Nav';
import Header from './header/header';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Header />
      </header>
      <div className="nav-menu">
        <Nav />
        <Body />
      </div>
    </div>
  );
}

export default App;
