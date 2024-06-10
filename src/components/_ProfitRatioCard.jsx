import React, { useEffect } from 'react';
import MiniChart from './MiniChart';
import { animateCounters } from '../utils/animateCounters';

const ProfitRatioCard = () => {
    const chartData = [{
        name: 'Data',
        data: [10, 30, 65, 20, 20, 40, 30]
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
                            <span className="text-muted mb-3 lh-1 d-block text-truncate">Profit Ratio</span>
                            <h4 className="mb-3">
                                <span className="counter-value" data-target="12.57">0</span>%
                            </h4>
                        </div>
                        <div className="col-6">
                            <MiniChart chartData={chartData} />
                        </div>
                    </div>
                    <div className="text-nowrap">
                        <span className="badge bg-soft-success text-success">+2.95%</span>
                        <span className="ms-1 text-muted font-size-13">Since last week</span>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default ProfitRatioCard;
