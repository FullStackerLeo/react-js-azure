import React from 'react';

const InvestedOverviewCard = () => (
    <div className="col-xl-7">
        <div className="row">
            <div className="col-xl-8">
                <div className="card card-h-100">
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

            <div className="col-xl-4">
        <div className="card bg-primary text-white shadow-primary card-h-100">
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
                    </div>
                </div>
            </div>
        </div>
    </div>


        </div>
    </div>
);

export default InvestedOverviewCard;
