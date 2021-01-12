import './App.css';
import HomePage from './Pages/HomePage/HomePage';
import {Route,Switch} from 'react-router-dom';

const Hats = () =>{
  return(
    <div>
      Hats Page
    </div>
  );
}

function App() {
  return (
    <div>
      <Switch/>
      <Route exact path='/' component={HomePage}/>
      <Route exact path='/hats' component={Hats}/>
      <Switch/>
    </div>
  );
}

export default App;
