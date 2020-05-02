import React from 'react';
import Rating from '../components/product/Rating';

const imgUrl = "https://wallsdesk.com/wp-content/uploads/2016/11/Paragliding-Wallpapers.jpg";

class AdventureDetails extends React.Component {

    render() {
        return <div className="adventure-details">
            <div className="row">
                <div className="col-md-3 order-1 order-md-0">
                    <div className="d-flex flex-row flex-md-column h-100">
                        <div className="thumbnail-image">
                            <img className="img-fluid" src="https://wallsdesk.com/wp-content/uploads/2016/11/Paragliding-Wallpapers.jpg" alt="sad" />
                        </div>
                        <div className="thumbnail-image">
                            <img className="img-fluid" src="https://wallsdesk.com/wp-content/uploads/2016/11/Paragliding-Wallpapers.jpg" alt="sad" />
                        </div>
                        <div className="thumbnail-image">
                            <img className="img-fluid" src="https://wallsdesk.com/wp-content/uploads/2016/11/Paragliding-Wallpapers.jpg" alt="sad" />
                        </div>
                    </div>
                </div>

                <div className="col order-0 order-md-1">
                    <div className="featured-image" style={{backgroundImage: `url(${imgUrl})`}}></div>
                </div>
            </div>

            <div className="row">
                <div className="col">
                    <div className="adventure-title-container d-flex justify-content-between flex-column flex-md-row align-items-left align-items-md-center">
                        <div className="adventure-title">
                            Title goes here
                        </div>
                        <div className="adventure-info">
                            info here
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col">
                    <div className="d-flex align-items-center justify-content-between justify-content-md-start">
                        <div className="adventure-subtitle">
                            Some additional info ...
                        </div>
                        <Rating rating={4.5} />
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col">
                    <div className="d-flex tags-container">
                        <span className="tag-label">Secondary</span>
                        <span className="tag-label">Success</span>
                        <span className="tag-label">Danger</span>
                        <span className="tag-label">Warning</span>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col">
                    <div className="d-flex adventure-specs-container">
                        <div className="adventure-spec d-flex">
                            <div className="adventure-icon-container d-flex align-items-center justify-content-center">
                                <i className="fas fa-stopwatch"></i>
                            </div>
                            <div className="d-flex flex-column justify-content-center">
                                <div className="adventure-spec-label">Duration</div>
                                <div className="adventure-spec-value">4 Days</div>
                            </div>
                        </div>

                        <div className="adventure-spec d-flex">
                            <div className="adventure-icon-container d-flex align-items-center justify-content-center">
                                <i className="fas fa-hiking"></i>
                            </div>
                            <div className="d-flex flex-column justify-content-center">
                                <div className="adventure-spec-label">Activity level</div>
                                <div className="adventure-spec-value">Standart</div>
                            </div>
                        </div>

                        <div className="adventure-spec d-flex">
                            <div className="adventure-icon-container d-flex align-items-center justify-content-center">
                                <i className="fas fa-air-freshener"></i>
                            </div>
                            <div className="d-flex flex-column justify-content-center">
                                <div className="adventure-spec-label">Hosted in</div>
                                <div className="adventure-spec-value">Plovdiv</div>
                            </div>
                        </div>

                        <div className="adventure-spec d-flex">
                            <div className="adventure-icon-container d-flex align-items-center justify-content-center">
                                <i className="fas fa-box-open"></i>
                            </div>
                            <div className="d-flex flex-column justify-content-center">
                                <div className="adventure-spec-label">Includes</div>
                                <div className="adventure-spec-value">Everything</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col">
                    <div className="description-container">
                        <h3 className="description-label">Description</h3>
                        <p className="description-content">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        <button type="button" className="btn btn-primary">Action</button>
                    </div>
                </div>
            </div>
        </div>;
    }
}

export default AdventureDetails;