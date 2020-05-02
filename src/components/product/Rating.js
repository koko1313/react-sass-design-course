import React from 'react';

const Rating = props => {

    const getStars = () => {
        const stars = [];

        for(let i = 0; i < 5; i++) {
            const result = props.rating - i;
            if(result > 0.5) {
                stars.push(<i className="fas fa-star"></i>);
            }
            if(result > 0 && result <= 0.55) {
                stars.push(<i className="fas fa-star-half-alt"></i>);
            }
            if(result <= 0) {
                stars.push(<i className="far fa-star"></i>);
            }
        }

        return stars;
    }

    return <div className="rating d-flex">
        {getStars()}
    </div>

}

export default Rating;