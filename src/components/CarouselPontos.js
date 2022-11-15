import React from "react"
import ponto from '../img/pontoswifi.png'
import pontos2 from '../img/ponto2.jpg'
import pontos3 from '../img/pontos3.jpg'


function CarouselPonto() {
    return (
        <>

            <div className="container">
                <div id="carouselExampleControlsNoTouching" className="carousel slide" data-bs-touch="false" data-bs-interval="false">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={ponto} className="d-block w-100" alt="" />
                        </div>
                        <div className="carousel-item">
                            <img src={pontos2} className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src={pontos3} className="d-block w-100" alt="..." />
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

export default CarouselPonto