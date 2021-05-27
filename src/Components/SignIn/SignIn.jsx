import React from 'react';
import { signInWithGoogle } from '../../Firebase/Firebase.utils';
import CustomBotton from '../CustomButton/CustomButton';
import FormInput from '../FormInput/FormInput';
import './SignIn.scss';

class SignIn extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            email : '',
            password : ''
        }
    }

handleSubmit = event => {
    event.preventDefault();
    this.setState({email:'',password:''});
}

handleChange = event => {
    const {value , name } = event.target ;
    this.setState({[name]:value});
}

    render(){
        return(
            <div className='sign-in'>
                <h2>I already Have an account</h2>
                <span>Sign In with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                <FormInput 
                name='email' 
                type='email'
                label='email' 
                value={this.state.email} 
                handleChange={this.handleChange}
                required
                />
                <FormInput
                name='password' 
                type='password'
                label='password'
                value={this.state.password} 
                handleChange={this.handleChange} 
                required 
                />
                <div className='buttons'>
                <CustomBotton type='submit'  >Sign In</CustomBotton>
                <CustomBotton onClick={signInWithGoogle} isGoogleSignIn >Sign In With Goggle</CustomBotton>
                </div>
                </form>
            </div>
        )
    }
}

export default SignIn;