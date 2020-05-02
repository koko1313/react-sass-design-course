import React from 'react';
import Product from './Product';

const ProductList = props => {

    return (
        <div className="product-list">
            <div className="row">
                <Product 
                    image = "https://static.posters.cz/image/1300/%D0%A4%D0%BE%D1%82%D0%BE-%D1%82%D0%B0%D0%BF%D0%B5%D1%82%D0%B8/cappodocia-hot-air-balloon-416x290-cm-premium-non-woven-wallpaper-130gsm-i54398.jpg"
                    title = "Hot air balloon"
                    rating = {5}
                    description = "Hot air balloon adventure" />

                <Product 
                    image = "https://wallsdesk.com/wp-content/uploads/2016/11/Paragliding-Wallpapers.jpg"
                    title = "Paragliding"
                    rating = {3.2}
                    description = "Paragliding adventure" />

                <Product 
                    image = "https://cutewallpaper.org/21/cessna-172-wallpaper/Free-download-Cessna-172-Sunset-Here-it-is-1800x1199-for-.jpg"
                    title = "Airplane"
                    rating = {5}
                    description = "Airplane adventure" />

                <Product 
                    image = "https://p1.pxfuel.com/preview/924/346/522/fishing-boat-sunset-bright-colors-red.jpg"
                    title = "Boat"
                    rating = {1}
                    description = "Boat adventure" />

                <Product 
                    image = "https://static.vecteezy.com/system/resources/previews/000/172/247/non_2x/mountain-zipline-pine-free-vector.jpg"
                    title = "Zipline"
                    rating = {3.6}
                    description = "Zipline adventure" />
            </div>
        </div>
    );
}
export default ProductList;