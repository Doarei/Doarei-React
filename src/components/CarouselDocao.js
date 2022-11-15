import React from "react"
import doe from '../img/doe.png'
import doar2 from '../img/doar2.png'
import doar3 from '../img/doar3.png'


function CarouselDoacao() {
    return (
        <>
            <div className="container">
                <div id="carouselExampleControlsNoTouching" className="carousel slide" data-bs-touch="false" data-bs-interval="false">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={doe} className="d-block w-100" alt="300px" />
                        </div>
                        <div className="carousel-item">
                            <img src={doar2} className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src={doar3} className="d-block w-100" alt="..." />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching"
                        data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching"
                        data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>

            </div>

        </>
    )

}

export default CarouselDoacao