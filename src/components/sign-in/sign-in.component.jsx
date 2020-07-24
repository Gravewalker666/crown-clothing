import React from "react";
import './sign-in.styles.scss';
import FormInput from "../form-input.component/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { SignInWithGoogle } from "../../firebase/firebase.util";

class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        }
    }

    handleSubmit = event => {
        event.preventDefault();
        this.setState({
            email: '',
            password: '',
        })
    }

    handleInputChange = event => {
        const { value, name } = event.target;
        this.setState({ [name] : value });
    }

    render() {
        return (
            <div className='signin'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput type='email' name='email' label={'email'} value={this.state.email} handleChange={this.handleInputChange} required={true}/>
                    <FormInput type='password' name='password' label={'password'} value={this.state.password} handleChange={this.handleInputChange} required={true}/>
                    <div className='buttons'>
                        <CustomButton type='submit' value='submit form'>Submit</CustomButton>
                        <CustomButton onClick={ SignInWithGoogle } isGoogleSignIn={true}> Sign in With Google </CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;
