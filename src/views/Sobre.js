import React from "react";
import Accordion from "../components/Accordion";

function Sobre() {
    return (

        <>
            <div className="container">
                <div className="p-5 bg-light container-fluid">

                    <h1 className="display-4">Doarei
                    </h1>
                    <p className="lead">Faça parte desta corrente do bem, doe!</p>
                    <h5>Você tem algum Smartphone, notebook ou computador que não usa mais? Ajude um estudante, assim estará
                        contribuindo para o desenvolvimento do nosso país! "É a educação que faz o futuro parecer um lugar de esperança
                        e transformação!"</h5>
                </div>
                <Accordion/>
            </div>
        </>

    )
}

export default Sobre