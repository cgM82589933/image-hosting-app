import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const initialFormState = {
    username: '',
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    passwordVer: '',
};

function Register() {
    const [form, setForm] = useState(initialFormState);
    const [errors, setErrors] = useState(initialFormState);

    const handleChange = (e: any) => {
        setForm({ ...form, [e.target.id]: e.target.value });
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();

        const newUser = {
            username: form.username,
            email: form.email,
            firstName: form.firstName,
            lastName: form.lastName,
            password: form.password,
            passwordVer: form.passwordVer,
        };

        console.log(newUser);
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col s8 offset-s2">
                    <Link to="/" className="btn-flat waves-effect">
                        <i className="material-icons left">keyboard-backspace</i> Back to home
                    </Link>
                    <div>
                        <h4>
                            <b>Register</b> below
                        </h4>
                        <p className="grey-text text-darken-1">
                            Already have an account? <Link to="/login">Login</Link>
                        </p>
                    </div>
                    <form noValidate onSubmit={handleSubmit}>
                        <div className="input-field col s12">
                            <input
                                onChange={handleChange}
                                value={form.username}
                                id="name"
                                type="text"
                            />
                            <label htmlFor="username">Username</label>
                        </div>
                        <div className="input-field col s12">
                            <input
                                onChange={handleChange}
                                value={form.firstName}
                                id="firstName"
                                type="text"
                            />
                            <label htmlFor="firstName">First Name</label>
                        </div>
                        <div className="input-field col s12">
                            <input
                                onChange={handleChange}
                                value={form.lastName}
                                id="lastName"
                                type="text"
                            />
                            <label htmlFor="lastName">Last Name</label>
                        </div>
                        <div className="input-field col s12">
                            <input
                                onChange={handleChange}
                                value={form.email}
                                id="email"
                                type="email"
                            />
                            <label htmlFor="email">Email</label>
                        </div>
                        <div className="input-field col s12">
                            <input
                                onChange={handleChange}
                                value={form.password}
                                id="password"
                                type="password"
                            />
                            <label htmlFor="password">Password</label>
                        </div>
                        <div className="input-field col s12">
                            <input
                                onChange={handleChange}
                                value={form.passwordVer}
                                id="passwordVer"
                                type="password"
                            />
                            <label htmlFor="passwordVer">Verify Password</label>
                        </div>
                        <div className="col s12" style={{ paddingLeft: "11.25px" }}>
                            <button
                                className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                                style={{
                                    width: "150px",
                                    borderRadius: "3px",
                                    letterSpacing: "1.5px",
                                    marginTop: "1rem"
                                }}
                                type="submit"
                            >
                                Register
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Register;
