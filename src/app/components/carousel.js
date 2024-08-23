import Image from 'next/image';
import React from 'react';

const ImageList = ["/image/Poom1.png", "/image/Poom2.png", "/image/Poom3.png"];

function Carousel() {
    return (
        <div id="carouselExampleAutoplaying" className="carousel slide position-relative" data-bs-ride="carousel" data-bs-interval="5000">
            <div className="carousel-inner">
                {ImageList.map((path, index) => (
                    <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                        <Image
                            src={path}
                            className="d-block w-100"
                            alt={`Image ${index + 1}`}
                            layout="responsive"
                            width={1920}
                            height={1080}
                        />
                    </div>
                ))}
            </div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <div className="">
                <button
                    className="carousel-control-prev top-50 bottom-50 position-absolute"
                    type="button"
                    data-bs-target="#carouselExampleAutoplaying"
                    data-bs-slide="prev"
                >
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next top-50 bottom-50 position-absolute"
                    type="button"
                    data-bs-target="#carouselExampleAutoplaying"
                    data-bs-slide="next"
                >
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
}

export default Carousel;