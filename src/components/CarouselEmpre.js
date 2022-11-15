import React from "react"
import carrossel1 from '../img/carrossel1.png'
import carrossel2 from '../img/carrossel2.png'
import carrossel3 from '../img/carrossel3.png'

function CarouselEmpre() {
    return (
        <>
            <div className="container">
                <div id="carouselExampleControlsNoTouching" className="carousel slide" data-bs-touch="false" data-bs-interval="false">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={carrossel1} className="d-block w-100" alt="300px" />
                        </div>
                        <div className="carousel-item">
                            <img src={carrossel2} className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src={carrossel3} className="d-block w-100" alt="..." />
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
<br/>
        </>
    )

}

export default CarouselEmpre