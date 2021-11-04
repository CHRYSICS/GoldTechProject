import React, { Component } from 'react';

class Login extends Component {
    render() {
        return (
            <div>
                <h1>Login</h1>
                <form method="post" action="/login">
                    <p>
                        <label>Email:</label>
                        <input type="email" name="email" />
                    </p>
                    <p>
                        <label>Password:</label>
                        <input type="password" name="password" />
                    </p>
                    <p>
                        <input type="submit" value="Login" />
                    </p>
                </form>
            </div>
        );
    }
}

export default Login;