import React from 'react';

const Trading = () => (
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
    </div>
);

export default Trading;
