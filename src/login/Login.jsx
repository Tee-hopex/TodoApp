import React from "react";
import "./Login.css";

function Login() {
    return (
        <div className="login-container">
            <header className="login-header">
                <h1 className="login-title">Login to Todo App</h1>
            </header>
            <main className="login-main">
                <form className="login-form">
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" required />
                    </div>
                    <button type="submit" className="login-btn">Login</button>
                </form>
                <div className="login-footer">
                    <p>
                        Don't have an account? <a href="/register">Register</a>
                    </p>
                </div>
            </main>
        </div>
    );
}

export default Login;