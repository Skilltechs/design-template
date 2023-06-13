import Header from './header/header';
import './index.css';
import Body from './body/body';
// import SideNav from './side-nav/side-nav';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <div className="title">
          <p><b>Account Setting</b></p>
          
        </div>
      </header>
      <div className="body">
        <Body />
      </div>
    </div>
  );
}

export default App;
