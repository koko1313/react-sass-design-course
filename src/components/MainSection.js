import React from 'react';
import EventBoard from './EventBoard';
import VideoContainer from './VideoContainer';

const MainSection = props => {

    return (
        <div className="d-flex main-section">
            <VideoContainer url="https://www.youtube.com/embed/PVVrieRYI3M" />
            <EventBoard />
        </div>
    );
}
export default MainSection;