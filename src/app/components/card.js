import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Card() {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-4">
                    <div className="card shadow-lg" style={{ width: '18rem', borderRadius: '15px', overflow: 'hidden' }}>
                        <img src="image/Card1.png" className="card-img-top" alt="..." />
                        <div className="card-body text-center">
                            <h5 className="card-title">Meggie Supreme</h5>
                            <p className="card-text">Meggie Supreme: A savory blend of meats, peppers, and mushrooms. Every bite is a delight!.</p>
                            <a href="#" className="btn btn-primary">Buy now</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card shadow-lg" style={{ width: '18rem', borderRadius: '15px', overflow: 'hidden' }}>
                        <img src="image/Card2.png" className="card-img-top" alt="..." />
                        <div className="card-body text-center">
                            <h5 className="card-title">Veggie Supreme</h5>
                            <p className="card-text">Veggie Supreme: Fresh and flavorful, packed with bell peppers and mushrooms for the perfect vegetarian feast!.</p>
                            <a href="#" className="btn btn-primary">Buy now</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card shadow-lg" style={{ width: '18rem', borderRadius: '15px', overflow: 'hidden' }}>
                        <img src="image/Card3.png" className="card-img-top" alt="..." />
                        <div className="card-body text-center">
                            <h5 className="card-title">Hawaiian Delight</h5>
                            <p className="card-text">Hawaiian Delight: Juicy pineapple meets savory ham for a sweet and savory tropical escape!.</p>
                            <a href="#" className="btn btn-primary">Buy now</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
