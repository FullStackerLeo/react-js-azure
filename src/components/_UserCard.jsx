// UserCard.js
import React, { useState } from 'react';

const UserCard = () => {
    const [showRegisterForm, setShowRegisterForm] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleRegisterClick = () => {
        setShowRegisterForm(true);
    };

    const handleRegister = (e) => {
        e.preventDefault();
        // Handle registration logic here
        console.log('Email:', email, 'Password:', password);
        // Reset form fields
        setEmail('');
        setPassword('');
        setShowRegisterForm(false);
    };

    return (
        <div className="col-xl-4">

            <div className="card">
                <div className="card-header align-items-center d-flex">
                    <h4 className="card-title mb-0 flex-grow-1">User</h4>
                    <div className="flex-shrink-0">
                        <ul className="nav justify-content-end nav-tabs-custom rounded card-header-tabs" role="tablist">
                            <li className="nav-item">
                                <a className="nav-link active" data-bs-toggle="tab" href="#transactions-all-tab" role="tab">
                                    Login
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" data-bs-toggle="tab" href="#transactions-buy-tab" role="tab" onClick={handleRegisterClick}>
                                    Register
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" data-bs-toggle="tab" href="#transactions-sell-tab" role="tab">
                                    Logout
                                </a>
                            </li>
                        </ul>
                        {/* <!--end nav tabs --> */}
                    </div>
                </div>

                <div className="card-body px-0">
                    <div className="tab-content">
                        <div className="tab-pane active" id="transactions-all-tab" role="tabpanel">
                            <div className="table-responsive px-3" data-simplebar="" style={{ height: '312px' }}>
                                {showRegisterForm && (
                                    <div className="register-modal">
                                        <form className="custom-form mt-4 pt-2" onSubmit={handleRegister}>
                                            <div className="mb-3">
                                                <label className="form-label">Username</label>
                                                <input type="email" className="form-control" id="username" placeholder="Enter Email" value={email} onChange={(e) => setEmail(e.target.value)}
                                                />
                                            </div>
                                            <div className="mb-3">
                                                <div className="d-flex align-items-start">
                                                    <div className="flex-grow-1">
                                                        <label className="form-label">Password</label>
                                                    </div>
                                                    <div className="flex-shrink-0">
                                                        <div className="">
                                                            <a href="auth-recoverpw.html" className="text-muted">Forgot password?</a>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="input-group auth-pass-inputgroup">
                                                    <input type="password" className="form-control" placeholder="Enter password" aria-label="Password" aria-describedby="password-addon" value={password} onChange={(e) => setPassword(e.target.value)} />
                                                    <button className="btn btn-light shadow-none ms-0" type="button" id="password-addon"><i className="mdi mdi-eye-outline"></i></button>
                                                </div>
                                            </div>
                                            <div className="row mb-4">
                                                <div className="col">
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="checkbox" id="remember-check" />
                                                        <label className="form-check-label" htmlFor="remember-check">
                                                            Remember me
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mb-3">
                                                <button className="btn btn-primary w-100 waves-effect waves-light" type="submit">Log In/Register</button>
                                            </div>
                                        </form>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserCard;
