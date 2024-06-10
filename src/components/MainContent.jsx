// Header.js
import React, { useState } from 'react';
import WalletCard from './_WalletCard';
import TradesCard from './_TradesCard';
import InvestedAmountCard from './_InvestedAmountCard';
import ProfitRatioCard from './_ProfitRatioCard';
import WalletBalanceCard from './_WalletBalanceCard';
import InvestedOverviewCard from './_InvestedOverviewCard';
import TradingCard from './_Trading';
import TransactionsCard from './_Transactions';
import UserCard from './_UserCard';
import DashboardCard from './_Dashboard'

const MainContent = () => {
    return (
        <div className="main-content">
            <div className="page-content">
                <div className="container-fluid">
                    <div className="row"><DashboardCard/></div>

                    <div className="row">
                        <WalletCard />
                        <TradesCard />
                        <InvestedAmountCard />
                        <ProfitRatioCard />
                    </div>

                    <div className="row">
                        <WalletBalanceCard />
                        <InvestedOverviewCard />
                    </div>

                    <div className="row">
                        <TradingCard />
                        <TransactionsCard />
                        <UserCard />
                    </div>
                </div>
            </div>
        </div >
    );
}

export default MainContent;
