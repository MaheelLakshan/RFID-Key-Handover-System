import './App.css';
import MainDash from './components/MainDash/MainDash';
import Slidebar from './components/Slidebar/Sidebar';
import Updates from './components/Updates/Updates'

function App() {
  return (
    <div className="App">
      <div className="AppGlass">
        <Slidebar />
        <MainDash />
        <Updates/>
      </div>
    </div>
  );
}

export default App;
