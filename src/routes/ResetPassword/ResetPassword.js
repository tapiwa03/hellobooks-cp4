import React from 'react';
import { Link } from 'react-router-dom';
import { resetPost } from '../../helpers/apiFetch/authUrls';

class ResetPassword extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.submitForm = this.submitForm.bind(this);
        this.state = {
            email: ''
        };
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    submitForm(e) {
        e.preventDefault();
        resetPost('reset-password', this.state, this.props, '');
    }

    render() {
        return (
            <div>
                <h3>Reset Password</h3>
                <form onSubmit={this.submitForm}>
                    Email:
                    <input
                        type="email"
                        name="email"
                        value={this.state.email}
                        placeholder="Email"
                        onChange={this.handleChange}
                        required/>
                    <br />
                    <input type="submit" value="Submit" />
                </form>
                <br/><br/>
                <Link to="/" >
                    <button type='button'>Login</button>
                </Link>
                <Link to="/register" >
                    <button type='button'>Register</button>
                </Link>
            </div>
        );
    }
}
export default ResetPassword;