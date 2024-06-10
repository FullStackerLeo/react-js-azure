import React from 'react';

const NewsCarouselCard = () => (
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
);

export default NewsCarouselCard;
