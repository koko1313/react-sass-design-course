import React from 'react';

const FunctionalComponent = props => {

    return (
        <div className="video-container">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe title="main-video" className="embed-responsive-item" src={props.url} allowfullscreen></iframe>
            </div>
        </div>
    );
}
export default FunctionalComponent;