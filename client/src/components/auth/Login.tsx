import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const initialFormState = {
    email: '',
    password: '',
};

function Login() {
    const [form, setForm] = useState(initialFormState);
    const [errors, setErrors] = useState(initialFormState);

    const handleChange = (e: any) => {
        setForm({ ...form, [e.target.id]: e.target.value });
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();

        const userData = {
            email: form.email,
            password: form.password,
        };

        console.log({ userData });
    };

    return (
        <div className="container">
            <div style={{ marginTop: "4rem" }} className="row">
                <div className="col s8 offset-s2">
                    <Link to="/" className="btn-flat waves-effect">
                        <i className="material-icons left">keyboard_backspace</i> Back to home
                    </Link>
                    <div className="col s12" style={{ paddingLeft: "11.25px" }}>
                        <h4>
                            <b>Login</b> below
                        </h4>
                        <p className="grey-text text-darken-1">
                            Don't have an account? <Link to="/register">Register</Link>
                        </p>
                    </div>
                    <form noValidate onSubmit={handleSubmit}>
                        <div className="input-field col s12">
                            <input onChange={handleChange} value={form.email} id="email" type="email" />
                            <label htmlFor="email">Email</label>
                        </div>
                        <div className="input-field col s12">
                            <input onChange={handleChange} value={form.password} id="password" type="password" />
                            <label htmlFor="password">Password</label>
                        </div>
                        <div className="col s12" style={{ paddingLeft: "11.25px" }}>
                            <button
                                style={{
                                    width: "150px",
                                    borderRadius: "3px",
                                    letterSpacing: "1.5px",
                                    marginTop: "1rem"
                                }}
                                className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                                type="submit"
                            >
                                Login
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
