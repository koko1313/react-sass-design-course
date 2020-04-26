import React from 'react';
import TeamName from './TeamName';

const EventBoard = props => {

    return (
        <div className="event-board d-flex align-items-center"> {/* d-flex align-items-center подреждат съдържанието вертикално в центъра */}
            <div className="event-content">
                <div className="logo-container d-flex justify-content-center">
                    <i className="fa fa-address-card"></i>
                </div>

                <div className="event-info-container d-flex flex-column align-items-center">
                    <div className="event-title">Music battle</div>

                    <div className="event-teams d-flex">
                        <TeamName team="Koko" />

                        <div className="event-time d-flex flex-column align-items-center">
                            <div className="live-label">Live</div>
                            <div className="event-result d-flex">
                                <div className="home-team">2</div>
                                <div className="separator">:</div>
                                <div className="away-team">1</div>
                            </div>
                        </div>

                        <TeamName team="Someone else" />
                    </div>

                    <div className="event-label">Event label</div>
                    <div className="event-description">Event description</div>
                </div>
            </div>
        </div>
    );
}
export default EventBoard;