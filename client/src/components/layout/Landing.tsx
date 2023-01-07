import React from 'react';
import { Link } from 'react-router-dom';

function Landing() {
    return (
        <div style={{ height: "75vh" }} className="container valign-wrapper">
            <div className="row">
                <h4>
                    <b>Build</b> a login/auth app with the{" "}
                    <span style={{ fontFamily: "monospace" }}>MERN</span>
                    {" "}stack from scratch
                </h4>
                <p className="flow-text grey-text text-darken-1">
                    Create a (minimal) full-stack app with user auth via passport and JWTs
                </p>
                <br />
                <div className="col s6">
                    <Link
                        to="/register"
                        style={{
                            width: "140px",
                            borderRadius: "3px",
                            letterSpacing: "1.5px"
                        }}
                        className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                    >
                        Login
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Landing;
