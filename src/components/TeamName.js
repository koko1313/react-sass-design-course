import React from 'react';

const TeamName = props => {

    return (
        <div className="team-container d-flex flex-column align-items-center justify-content-center">
            <i className="fa fa-thumbs-up"></i>
            <div className="team-name">{props.team}</div>
        </div>
    );
}
export default TeamName;