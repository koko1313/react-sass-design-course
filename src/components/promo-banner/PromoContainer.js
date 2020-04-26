import React from 'react';
import PromoBanner from './PromoBanner';

const PromoContainer = props => {

    return (
        <div className="promo-container d-flex">
            <PromoBanner 
                title = "Day landscape"
                description = "A beautiful bright day. Blue sky and a high mountain."
                img = "https://images.wallpaperscraft.com/image/beautiful_scenery_mountains_lake_nature_93318_2560x1440.jpg" />
            <PromoBanner 
                title = "Night landscape"
                description = "An amazing night sky."
                img="https://wallpapercave.com/wp/wp3137905.jpg" />
        </div>
    );
}
export default PromoContainer;