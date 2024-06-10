import React, { useEffect } from 'react';
import MiniChart from './MiniChart';
import { animateCounters } from '../utils/animateCounters';

const WalletCard = () => {
    const chartData = [{
        name: 'Data',
        data: [10, 20, 45, 30, 20, 40, 30]
    }];

    useEffect(() => {
        animateCounters();
    }, []);

    return (
        <div className="col-xl-3 col-md-6">
            <div className="card card-h-100">
                <div className="card-body">
                    <div className="row align-items-center">
                        <div className="col-6">
                            <span className="text-muted mb-3 lh-1 d-block text-truncate">My Wallet</span>
                            <h4 className="mb-3">
                                $<span className="counter-value" data-target="865.2">0</span>k
                            </h4>
                        </div>
                        <div className="col-6">
                            {/* Pass chart data to MiniChart component */}
                            <MiniChart chartData={chartData} />
                        </div>
                    </div>
                    <div className="text-nowrap">
                        <span className="badge bg-soft-success text-success">+$20.9k</span>
                        <span className="ms-1 text-muted font-size-13">Since last week</span>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default WalletCard;
