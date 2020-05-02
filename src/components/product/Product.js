import React from 'react';
import Rating from './Rating';

const Product = props => {

    return (
        <div className="col-md-3">
            <div className="card product-card">
                <div className="product-image-container">
                    <img className="card-img-top" src={props.image} alt={props.title} />
                </div>
                <div className="card-body">
                    <div className="d-flex">
                        <i className="fa fa-address-card"></i>
                        <div className="card-title-container">
                            <h5 className="card-title">{props.title}</h5>
                            <div className="card-title-description">{props.description}</div>
                        </div>
                    </div>

                    <div className="d-flex justify-content-between">
                        <Rating rating={props.rating} />
                        <div>
                            <span class="badge badge-pill badge-danger">Free photos</span>
                        </div>
                    </div>

                    <div className="d-flex justify-content-between product-info align-items-center">
                        <div className="d-flex align-items-center">
                            <div className="sales-count">1234</div>
                            <div className="sales-label">sales</div>
                        </div>
                        <div className="price">
                            $123
                        </div>
                    </div>

                    <div className="d-flex">
                        <button type="button" className="btn btn-primary card-button">Book</button>
                        <button type="button" className="btn btn-outline-primary card-button">Details</button>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}
export default Product;