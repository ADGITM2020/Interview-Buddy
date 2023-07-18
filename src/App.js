import './App.css';
import Navbar from './components/Home/Navbar';
import Footer from './components/Home/Footer';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import CreateRoom from "./CreateRoom";
import Room from "./Room";

function App() {
  return (
    <>
        <Navbar/>
      <div className="App">
        <BrowserRouter>
        <Switch>
          <Route path="/" exact component={CreateRoom} />
          <Route path="/room/:roomID" component={Room} />
        </Switch>
        </BrowserRouter>
      </div>
      <Footer/>
    </>
  );
}

export default App;
