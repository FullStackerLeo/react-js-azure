// Header.js
import React, { useState } from 'react';

const MainContent = () => {
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
        <div className="main-content">
            <div className="page-content">
                <div className="container-fluid">
                    {/* <!-- start page title --> */}
                    <div className="row">
                        <div className="col-12">
                            <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                                <h4 className="mb-sm-0 font-size-18">Dashboard</h4>
                                <div className="page-title-right">
                                    <ol className="breadcrumb m-0">
                                        <li className="breadcrumb-item"><a href="javascript: void(0);">Dashboard</a></li>
                                        <li className="breadcrumb-item active">Dashboard</li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-xl-3 col-md-6">
                            {/* <!--card --> */}
                            <div className="card card-h-100">
                                {/* <!--card body --> */}
                                <div className="card-body">
                                    <div className="row align-items-center">
                                        <div className="col-6">
                                            <span className="text-muted mb-3 lh-1 d-block text-truncate">My Wallet</span>
                                            <h4 className="mb-3">
                                                $<span className="counter-value" data-target="865.2">0</span>k
                                            </h4>
                                        </div>

                                        <div className="col-6">
                                            <div id="mini-chart1" data-colors='["#5156be"]' className="apex-charts mb-2"></div>
                                        </div>
                                    </div>
                                    <div className="text-nowrap">
                                        <span className="badge bg-soft-success text-success">+$20.9k</span>
                                        <span className="ms-1 text-muted font-size-13">Since last week</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-3 col-md-6">
                            {/* <!--card --> */}
                            <div className="card card-h-100">
                                {/* <!--card body --> */}
                                <div className="card-body">
                                    <div className="row align-items-center">
                                        <div className="col-6">
                                            <span className="text-muted mb-3 lh-1 d-block text-truncate">Number of Trades</span>
                                            <h4 className="mb-3">
                                                <span className="counter-value" data-target="6258">0</span>
                                            </h4>
                                        </div>
                                        <div className="col-6">
                                            <div id="mini-chart2" data-colors='["#5156be"]' className="apex-charts mb-2"></div>
                                        </div>
                                    </div>
                                    <div className="text-nowrap">
                                        <span className="badge bg-soft-danger text-danger">-29 Trades</span>
                                        <span className="ms-1 text-muted font-size-13">Since last week</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-3 col-md-6">
                            {/* <!--card --> */}
                            <div className="card card-h-100">
                                {/* <!--card body --> */}
                                <div className="card-body">
                                    <div className="row align-items-center">
                                        <div className="col-6">
                                            <span className="text-muted mb-3 lh-1 d-block text-truncate">Invested Amount</span>
                                            <h4 className="mb-3">
                                                $<span className="counter-value" data-target="4.32">0</span>M
                                            </h4>
                                        </div>
                                        <div className="col-6">
                                            <div id="mini-chart3" data-colors='["#5156be"]' className="apex-charts mb-2"></div>
                                        </div>
                                    </div>
                                    <div className="text-nowrap">
                                        <span className="badge bg-soft-success text-success">+ $2.8k</span>
                                        <span className="ms-1 text-muted font-size-13">Since last week</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-3 col-md-6">
                            {/* <!--card --> */}
                            <div className="card card-h-100">
                                {/* <!--card body --> */}
                                <div className="card-body">
                                    <div className="row align-items-center">
                                        <div className="col-6">
                                            <span className="text-muted mb-3 lh-1 d-block text-truncate">Profit Ration</span>
                                            <h4 className="mb-3">
                                                <span className="counter-value" data-target="12.57">0</span>%
                                            </h4>
                                        </div>
                                        <div className="col-6">
                                            <div id="mini-chart4" data-colors='["#5156be"]' className="apex-charts mb-2"></div>
                                        </div>
                                    </div>
                                    <div className="text-nowrap">
                                        <span className="badge bg-soft-success text-success">+2.95%</span>
                                        <span className="ms-1 text-muted font-size-13">Since last week</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-xl-5">
                            {/* <!--card --> */}
                            <div className="card card-h-100">
                                {/* <!--card body --> */}
                                <div className="card-body">
                                    <div className="d-flex flex-wrap align-items-center mb-4">
                                        <h5 className="card-title me-2">Wallet Balance</h5>
                                        <div className="ms-auto">
                                            <div>
                                                <button type="button" className="btn btn-soft-secondary btn-sm">
                                                    ALL
                                                </button>
                                                <button type="button" className="btn btn-soft-primary btn-sm">
                                                    1M
                                                </button>
                                                <button type="button" className="btn btn-soft-secondary btn-sm">
                                                    6M
                                                </button>
                                                <button type="button" className="btn btn-soft-secondary btn-sm active">
                                                    1Y
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row align-items-center">
                                        <div className="col-sm">
                                            <div id="wallet-balance" data-colors='["#777aca", "#5156be", "#a8aada"]' className="apex-charts"></div>
                                        </div>
                                        <div className="col-sm align-self-center">
                                            <div className="mt-4 mt-sm-0">
                                                <div>
                                                    <p className="mb-2"><i className="mdi mdi-circle align-middle font-size-10 me-2 text-success"></i> Bitcoin</p>
                                                    <h6>0.4412 BTC = <span className="text-muted font-size-14 fw-normal">$ 4025.32</span></h6>
                                                </div>

                                                <div className="mt-4 pt-2">
                                                    <p className="mb-2"><i className="mdi mdi-circle align-middle font-size-10 me-2 text-primary"></i> Ethereum</p>
                                                    <h6>4.5701 ETH = <span className="text-muted font-size-14 fw-normal">$ 1123.64</span></h6>
                                                </div>

                                                <div className="mt-4 pt-2">
                                                    <p className="mb-2"><i className="mdi mdi-circle align-middle font-size-10 me-2 text-info"></i> Litecoin</p>
                                                    <h6>35.3811 LTC = <span className="text-muted font-size-14 fw-normal">$ 2263.09</span></h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!--end card --> */}
                        </div>
                        <div className="col-xl-7">
                            <div className="row">
                                <div className="col-xl-8">
                                    {/* <!--card --> */}
                                    <div className="card card-h-100">
                                        {/* <!--card body --> */}
                                        <div className="card-body">
                                            <div className="d-flex flex-wrap align-items-center mb-4">
                                                <h5 className="card-title me-2">Invested Overview</h5>
                                                <div className="ms-auto">
                                                    <select className="form-select form-select-sm">
                                                        <option value="MAY" selected="">May</option>
                                                        <option value="AP">April</option>
                                                        <option value="MA">March</option>
                                                        <option value="FE">February</option>
                                                        <option value="JA">January</option>
                                                        <option value="DE">December</option>
                                                    </select>
                                                </div>
                                            </div>

                                            <div className="row align-items-center">
                                                <div className="col-sm">
                                                    <div id="invested-overview" data-colors='["#5156be", "#34c38f"]' className="apex-charts"></div>
                                                </div>
                                                <div className="col-sm align-self-center">
                                                    <div className="mt-4 mt-sm-0">
                                                        <p className="mb-1">Invested Amount</p>
                                                        <h4>$ 6134.39</h4>

                                                        <p className="text-muted mb-4"> + 0.0012.23 ( 0.2 % ) <i className="mdi mdi-arrow-up ms-1 text-success"></i></p>

                                                        <div className="row g-0">
                                                            <div className="col-6">
                                                                <div>
                                                                    <p className="mb-2 text-muted text-uppercase font-size-11">Income</p>
                                                                    <h5 className="fw-medium">$ 2632.46</h5>
                                                                </div>
                                                            </div>
                                                            <div className="col-6">
                                                                <div>
                                                                    <p className="mb-2 text-muted text-uppercase font-size-11">Expenses</p>
                                                                    <h5 className="fw-medium">-$ 924.38</h5>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="mt-2">
                                                            <a href="#" className="btn btn-primary btn-sm">View more <i className="mdi mdi-arrow-right ms-1"></i></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!--end col --> */}

                                <div className="col-xl-4">
                                    {/* <!--card --> */}
                                    <div className="card bg-primary text-white shadow-primary card-h-100">
                                        {/* <!--card body --> */}
                                        <div className="card-body p-0">
                                            <div id="carouselExampleCaptions" className="carousel slide text-center widget-carousel" data-bs-ride="carousel">
                                                <div className="carousel-inner">
                                                    <div className="carousel-item active">
                                                        <div className="text-center p-4">
                                                            <i className="mdi mdi-bitcoin widget-box-1-icon"></i>
                                                            <div className="avatar-md m-auto">
                                                                <span className="avatar-title rounded-circle bg-soft-light text-white font-size-24">
                                                                    <i className="mdi mdi-currency-btc"></i>
                                                                </span>
                                                            </div>
                                                            <h4 className="mt-3 lh-base fw-normal text-white"><b>Bitcoin</b> News</h4>
                                                            <p className="text-white-50 font-size-13"> Bitcoin prices fell sharply amid the global sell-off in
                                                                equities. Negative news over the past week has dampened sentiment for bitcoin. </p>
                                                            <button type="button" className="btn btn-light btn-sm">View details <i className="mdi mdi-arrow-right ms-1"></i></button>
                                                        </div>
                                                    </div>
                                                    {/* <!--end carousel-item --> */}
                                                    <div className="carousel-item">
                                                        <div className="text-center p-4">
                                                            <i className="mdi mdi-ethereum widget-box-1-icon"></i>
                                                            <div className="avatar-md m-auto">
                                                                <span className="avatar-title rounded-circle bg-soft-light text-white font-size-24">
                                                                    <i className="mdi mdi-ethereum"></i>
                                                                </span>
                                                            </div>
                                                            <h4 className="mt-3 lh-base fw-normal text-white"><b>ETH</b> News</h4>
                                                            <p className="text-white-50 font-size-13"> Bitcoin prices fell sharply amid the global sell-off in
                                                                equities. Negative news over the past week has dampened sentiment for bitcoin. </p>
                                                            <button type="button" className="btn btn-light btn-sm">View details <i className="mdi mdi-arrow-right ms-1"></i></button>
                                                        </div>
                                                    </div>
                                                    {/* <!--end carousel-item --> */}
                                                    <div className="carousel-item">
                                                        <div className="text-center p-4">
                                                            <i className="mdi mdi-litecoin widget-box-1-icon"></i>
                                                            <div className="avatar-md m-auto">
                                                                <span className="avatar-title rounded-circle bg-soft-light text-white font-size-24">
                                                                    <i className="mdi mdi-litecoin"></i>
                                                                </span>
                                                            </div>
                                                            <h4 className="mt-3 lh-base fw-normal text-white"><b>Litecoin</b> News</h4>
                                                            <p className="text-white-50 font-size-13"> Bitcoin prices fell sharply amid the global sell-off in
                                                                equities. Negative news over the past week has dampened sentiment for bitcoin. </p>
                                                            <button type="button" className="btn btn-light btn-sm">View details <i className="mdi mdi-arrow-right ms-1"></i></button>
                                                        </div>
                                                    </div>
                                                    {/* <!--end carousel-item --> */}
                                                </div>
                                                {/* <!--end carousel-inner --> */}

                                                <div className="carousel-indicators carousel-indicators-rounded">
                                                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                                </div>
                                                {/* <!--end carousel-indicators --> */}
                                            </div>
                                            {/* <!--end carousel --> */}
                                        </div>
                                        {/* <!--end card body --> */}
                                    </div>
                                    {/* <!--end card --> */}
                                </div>
                                {/* <!--end col --> */}
                            </div>
                            {/* <!--end row --> */}
                        </div>
                        {/* <!--end col --> */}
                    </div>

                    <div className="row">
                        <div className="col-xl-4">
                            <div className="card">
                                <div className="card-header align-items-center d-flex">
                                    <h4 className="card-title mb-0 flex-grow-1">Trading</h4>
                                    <div className="flex-shrink-0">
                                        <ul className="nav nav-tabs-custom card-header-tabs" role="tablist">
                                            <li className="nav-item">
                                                <a className="nav-link active" data-bs-toggle="tab" href="#buy-tab" role="tab">Buy</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" data-bs-toggle="tab" href="#sell-tab" role="tab">Sell</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <div className="tab-content">
                                        <div className="tab-pane active" id="buy-tab" role="tabpanel">
                                            <div className="float-end ms-2">
                                                <h5 className="font-size-14"><i className="bx bx-wallet text-primary font-size-16 align-middle me-1"></i> <a href="#!" className="text-reset text-decoration-underline">$4335.23</a></h5>
                                            </div>
                                            <h5 className="font-size-14 mb-4">Buy Coins</h5>
                                            <div>
                                                <div className="form-group mb-3">
                                                    <label>Payment method :</label>
                                                    <select className="form-select">
                                                        <option>Direct Bank Payment</option>
                                                        <option>Credit / Debit Card</option>
                                                        <option>Paypal</option>
                                                        <option>Payoneer</option>
                                                        <option>Stripe</option>
                                                    </select>
                                                </div>

                                                <div>
                                                    <label>Add Amount :</label>
                                                    <div className="input-group mb-3">
                                                        <label className="input-group-text">Amount</label>
                                                        <select className="form-select" style={{ width: '90px' }}>
                                                            <option value="BT" selected="">BTC</option>
                                                            <option value="ET">ETH</option>
                                                            <option value="LT">LTC</option>
                                                        </select>
                                                        <input type="text" className="form-control" placeholder="0.00121255" />
                                                    </div>

                                                    <div className="input-group mb-3">
                                                        <label className="input-group-text">Price</label>
                                                        <input type="text" className="form-control" placeholder="$58,245" />
                                                        <label className="input-group-text">$</label>
                                                    </div>

                                                    <div className="input-group mb-3">
                                                        <label className="input-group-text">Total</label>
                                                        <input type="text" className="form-control" placeholder="$36,854.25" />
                                                    </div>
                                                </div>
                                                <div className="text-center">
                                                    <button type="button" className="btn btn-success w-md">Buy Coin</button>
                                                    <button type="button" className="btn btn-danger w-md">Sell Coin</button>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="tab-pane" id="sell-tab" role="tabpanel">
                                            <div className="float-end ms-2">
                                                <h5 className="font-size-14"><i className="bx bx-wallet text-primary font-size-16 align-middle me-1"></i> <a href="#!" className="text-reset text-decoration-underline">$4235.23</a></h5>
                                            </div>
                                            <h5 className="font-size-14 mb-4">Sell Coins</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>{/* row */}
                        </div>{/* <div className="col-xl-4"> */}

                        <div className="col-xl-4">
                            <div className="card">
                                <div className="card-header align-items-center d-flex">
                                    <h4 className="card-title mb-0 flex-grow-1">Transactions</h4>
                                    <div className="flex-shrink-0">
                                        <ul className="nav justify-content-end nav-tabs-custom rounded card-header-tabs" role="tablist">
                                            <li className="nav-item">
                                                <a className="nav-link active" data-bs-toggle="tab" href="#transactions-all-tab" role="tab">
                                                    All
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" data-bs-toggle="tab" href="#transactions-buy-tab" role="tab">
                                                    Buy
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" data-bs-toggle="tab" href="#transactions-sell-tab" role="tab">
                                                    Sell
                                                </a>
                                            </li>
                                        </ul>
                                        {/* <!--end nav tabs --> */}
                                    </div>
                                </div>

                                <div className="card-body px-0">
                                    <div className="tab-content">
                                        <div className="tab-pane active" id="transactions-all-tab" role="tabpanel">
                                            <div className="table-responsive px-3" data-simplebar="" style={{ height: '352px' }}>
                                                <table className="table align-middle table-nowrap table-borderless">
                                                    <tbody>
                                                        <tr>
                                                            <td style={{ width: '50px' }}><div className="font-size-22 text-success"><i className="bx bx-down-arrow-circle d-block"></i></div></td>
                                                            <td><div><h5 className="font-size-14 mb-1">Buy BTC</h5><p className="text-muted mb-0 font-size-12">14 Mar, 2021</p></div></td>
                                                            <td><div className="text-end"><h5 className="font-size-14 mb-0">0.016 BTC</h5><p className="text-muted mb-0 font-size-12">Coin Value</p></div></td>
                                                            <td><div className="text-end"><h5 className="font-size-14 text-muted mb-0">$125.20</h5><p className="text-muted mb-0 font-size-12">Amount</p></div></td>
                                                        </tr>

                                                        <tr>
                                                            <td><div className="font-size-22 text-danger"><i className="bx bx-up-arrow-circle d-block"></i></div></td>
                                                            <td><div><h5 className="font-size-14 mb-1">Sell ETH</h5><p className="text-muted mb-0 font-size-12">15 Mar, 2021</p></div></td>
                                                            <td><div className="text-end"><h5 className="font-size-14 mb-0">0.56 ETH</h5><p className="text-muted mb-0 font-size-12">Coin Value</p></div></td>
                                                            <td><div className="text-end"><h5 className="font-size-14 text-muted mb-0">$112.34</h5><p className="text-muted mb-0 font-size-12">Amount</p></div></td></tr>
                                                        <tr>
                                                            <td><div className="font-size-22 text-success"><i className="bx bx-down-arrow-circle d-block"></i></div></td>
                                                            <td><div><h5 className="font-size-14 mb-1">Buy LTC</h5><p className="text-muted mb-0 font-size-12">16 Mar, 2021</p></div></td>
                                                            <td>
                                                                <div className="text-end">
                                                                    <h5 className="font-size-14 mb-0">1.88 LTC</h5>
                                                                    <p className="text-muted mb-0 font-size-12">Coin Value</p>
                                                                </div>
                                                            </td>

                                                            <td>
                                                                <div className="text-end">
                                                                    <h5 className="font-size-14 text-muted mb-0">$94.22</h5>
                                                                    <p className="text-muted mb-0 font-size-12">Amount</p>
                                                                </div>
                                                            </td>
                                                        </tr>

                                                        <tr>
                                                            <td>
                                                                <div className="font-size-22 text-success">
                                                                    <i className="bx bx-down-arrow-circle d-block"></i>
                                                                </div>
                                                            </td>

                                                            <td>
                                                                <div>
                                                                    <h5 className="font-size-14 mb-1">Buy ETH</h5>
                                                                    <p className="text-muted mb-0 font-size-12">17 Mar, 2021</p>
                                                                </div>
                                                            </td>

                                                            <td>
                                                                <div className="text-end">
                                                                    <h5 className="font-size-14 mb-0">0.42 ETH</h5>
                                                                    <p className="text-muted mb-0 font-size-12">Coin Value</p>
                                                                </div>
                                                            </td>

                                                            <td>
                                                                <div className="text-end">
                                                                    <h5 className="font-size-14 text-muted mb-0">$84.32</h5>
                                                                    <p className="text-muted mb-0 font-size-12">Amount</p>
                                                                </div>
                                                            </td>
                                                        </tr>

                                                        <tr>
                                                            <td>
                                                                <div className="font-size-22 text-danger">
                                                                    <i className="bx bx-up-arrow-circle d-block"></i>
                                                                </div>
                                                            </td>

                                                            <td>
                                                                <div>
                                                                    <h5 className="font-size-14 mb-1">Sell BTC</h5>
                                                                    <p className="text-muted mb-0 font-size-12">18 Mar, 2021</p>
                                                                </div>
                                                            </td>

                                                            <td>
                                                                <div className="text-end">
                                                                    <h5 className="font-size-14 mb-0">0.018 BTC</h5>
                                                                    <p className="text-muted mb-0 font-size-12">Coin Value</p>
                                                                </div>
                                                            </td>

                                                            <td>
                                                                <div className="text-end">
                                                                    <h5 className="font-size-14 text-muted mb-0">$145.80</h5>
                                                                    <p className="text-muted mb-0 font-size-12">Amount</p>
                                                                </div>
                                                            </td>
                                                        </tr>

                                                        <tr>
                                                            <td style={{ width: '50px' }}>
                                                                <div className="font-size-22 text-success">
                                                                    <i className="bx bx-down-arrow-circle d-block"></i>
                                                                </div>
                                                            </td>

                                                            <td>
                                                                <div>
                                                                    <h5 className="font-size-14 mb-1">Buy BTC</h5>
                                                                    <p className="text-muted mb-0 font-size-12">14 Mar, 2021</p>
                                                                </div>
                                                            </td>

                                                            <td>
                                                                <div className="text-end">
                                                                    <h5 className="font-size-14 mb-0">0.016 BTC</h5>
                                                                    <p className="text-muted mb-0 font-size-12">Coin Value</p>
                                                                </div>
                                                            </td>

                                                            <td>
                                                                <div className="text-end">
                                                                    <h5 className="font-size-14 text-muted mb-0">$125.20</h5>
                                                                    <p className="text-muted mb-0 font-size-12">Amount</p>
                                                                </div>
                                                            </td>
                                                        </tr>

                                                        <tr>
                                                            <td>
                                                                <div className="font-size-22 text-danger">
                                                                    <i className="bx bx-up-arrow-circle d-block"></i>
                                                                </div>
                                                            </td>

                                                            <td>
                                                                <div>
                                                                    <h5 className="font-size-14 mb-1">Sell ETH</h5>
                                                                    <p className="text-muted mb-0 font-size-12">15 Mar, 2021</p>
                                                                </div>
                                                            </td>

                                                            <td>
                                                                <div className="text-end">
                                                                    <h5 className="font-size-14 mb-0">0.56 ETH</h5>
                                                                    <p className="text-muted mb-0 font-size-12">Coin Value</p>
                                                                </div>
                                                            </td>

                                                            <td>
                                                                <div className="text-end">
                                                                    <h5 className="font-size-14 text-muted mb-0">$112.34</h5>
                                                                    <p className="text-muted mb-0 font-size-12">Amount</p>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>


                                    </div>
                                </div>








                            </div>
                        </div>

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
                                                <a className="nav-link" data-bs-toggle="tab" href="#transactions-buy-tab" role="tab">
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
                                                                    <input type="password" className="form-control" placeholder="Enter password" aria-label="Password" aria-describedby="password-addon" value={password} onChange={(e) => setPassword(e.target.value)}/>

                                                                    <button className="btn btn-light shadow-none ms-0" type="button" id="password-addon"><i className="mdi mdi-eye-outline"></i></button>
                                                                </div>
                                                            </div>
                                                            <div className="row mb-4">
                                                                <div className="col">
                                                                    <div className="form-check">
                                                                        <input className="form-check-input" type="checkbox" id="remember-check" />
                                                                        <label className="form-check-label" for="remember-check">
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

                    </div>
                </div>
            </div>
        </div >

    );
}

export default MainContent;
