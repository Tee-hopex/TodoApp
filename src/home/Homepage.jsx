import React from "react";
import "./Homepage.css";

import { useNavigate, Link, NavLink } from "react-router-dom";

function Homepage() {

    const navigate = useNavigate();
    

    function handleLogin() {
        navigate("/login");
    } 


    return (
        <>
            <header className="homepage-header">
                <nav className="homepage-nav">
                    <h1 className="logo">Todo App</h1>
                    <ul className="nav-links">
                        <li><a href="#features">Features</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#contact">Contact</a></li>
                        {/* <li onClick={handleLogin}>Login</li> */}
                        <li><NavLink to= "/login">Login</NavLink></li>
                    </ul>
                </nav>
            </header>

            <main className="homepage-main">
                <section onClick={handleLogin} className="hero-section">
                    <h2>Organize Your Day Effortlessly</h2>
                    <p>
                        Welcome to the Todo App! Manage your tasks, set reminders, and boost your productivity.
                    </p>
                    <a href="/todo" className="cta-button">Get Started</a>
                </section>

                <section id="features" className="features-section">
                    <h2>Features</h2>
                    <div className="features-list">
                        <div className="feature-item">
                            <h3>Easy Task Management</h3>
                            <p>Add, edit, and delete tasks with a simple interface.</p>
                        </div>
                        <div className="feature-item">
                            <h3>Reminders</h3>
                            <p>Set reminders to never miss an important task.</p>
                        </div>
                        <div className="feature-item">
                            <h3>Progress Tracking</h3>
                            <p>Mark tasks as completed and track your daily progress.</p>
                        </div>
                        <div className="feature-item">
                            <h3>Responsive Design</h3>
                            <p>Use the app on any device, anywhere.</p>
                        </div>
                    </div>
                </section>

                <section id="about" className="about-section">
                    <h2>About</h2>
                    <p>
                        The Todo App is designed to help you stay organized and productive. Whether you're a student, professional, or just someone who loves to keep things in order, our app is tailored for you.
                    </p>
                    <ul>
                        <li>Built with React</li>
                        <li>Simple and intuitive UI</li>
                        <li>Fast and lightweight</li>
                    </ul>
                </section>

                <section id="contact" className="contact-section">
                    <h2>Contact Us</h2>
                    <form className="contact-form">
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" name="name" required />

                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" required />

                        <label htmlFor="message">Message:</label>
                        <textarea id="message" name="message" rows="4" required></textarea>

                        <button type="submit">Send Message</button>
                    </form>
                </section>
            </main>

            <footer className="homepage-footer">
                <p>&copy; {new Date().getFullYear()} Todo App. All rights reserved.</p>
            </footer>
        </>
    );
}

export default Homepage;