import React from 'react';
import './App.css';
import HomePage from './Pages/HomePage/HomePage';
import {Route,Switch} from 'react-router-dom';
import ShopPage from './Pages/ShopPage/ShopPage';
import Header from './Components/Header/Header';
import {auth} from './Firebase/Firebase.utils';
import SignInAndSignUpPage from './Pages/SignIn-SignUp-Page/SignIn-SignUp-Page';

class App extends React.Component {

  constructor(){
    super();
    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user=> {
      this.setState({currentUser:user})
      console.log(user);
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
        <Switch/>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/shop' component={ShopPage}/>
        <Route exact path='/signin' component={SignInAndSignUpPage}/>
        <Switch/>
      </div>
    );
  }
}

export default App;
