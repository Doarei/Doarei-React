import React from "react";
import banner1 from '../img/banner1.png'
import banner2 from '../img/banner2.png'
import banner3 from '../img/banner3.png'
import { Link} from 'react-router-dom'

function Home() {

    const styles = { width: '100%', height: '100%' }

    return (
        <>
            <div className="container">
                <div className="p-5 bg-light container-fluid">
                    <h1 className="display-4">Doarei</h1>
                    <p className="lead">Faça parte desta corrente do bem, doe!</p>
                    <h5>Você tem algum Smartphone, notebook ou computador que não usa mais? Ajude um estudante, assim estará
                        contribuindo para o desenvolvimento do nosso país! </h5>

                    <h5> "É a educação que faz o futuro parecer um lugar de esperança e transformação!"</h5>
                </div>

                <div className="row mt-3">
                    <div className="row mt-3">
                        <div className="col-md-4 col-sm-12">
                            <div className="card">
                                <Link to="/Doacao"> <img className="card-img-top" src={banner1} alt="TITLE"
                                    style={styles} /></Link>
                                <div className="card-body">
                                    <h4 className="card-title">Doação</h4>
                                    <p className="card-text">Faça sua doação, ajude um estudante!</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 col-sm-12">
                            <div className="card">
                                <Link to="/Emprestar"><img className="card-img-top" src={banner2} alt="Title"
                                    style={styles} /></Link>
                                <div className="card-body">
                                    <h4 className="card-title">Empréstimo de equipamentos</h4>
                                    <p className="card-text">Solicitar um equipamento</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 col-sm-12">
                            <div className="card">
                                <Link to="/Pontos"> <img className="card-img-top" src={banner3} alt="Title"
                                    style={styles} /></Link>
                                <div className="card-body">
                                    <h4 className="card-title">Pontos wi-fi</h4>
                                    <p className="card-text">Conheça os pontos de wi-fi. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >

        </>

    )
}

export default Home