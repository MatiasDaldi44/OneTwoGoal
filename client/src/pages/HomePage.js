import React from 'react';
import CurrentMatches from '../components/LiveGames';
import DailySchedule from '../components/DailySchedule';

const HomePage = () => {
    return (
        <div>
            <CurrentMatches />
            <DailySchedule />
        </div>
    );
}

export default HomePage;