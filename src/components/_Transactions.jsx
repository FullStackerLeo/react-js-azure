import React from 'react';

const Transactions = () => (
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

);

export default Transactions;