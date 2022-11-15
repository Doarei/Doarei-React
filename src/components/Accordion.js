function Accordion() {
    return (
        <>
            <div className="container">
                <h4 className="mt-4">Conheça o Projeto!</h4>
                <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne"
                                aria-expanded="true" aria-controls="collapseOne">
                                Sobre doações
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne"
                            data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                Aceitamos doações de equipamentos de pessoas físicas e jurídicas. Os aparelhos serão higienizados e estarão disponíveis nos pontos de wi-fi ou serão entregues casa do solicitante.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwo">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                Sobre empréstimos de equipamentos
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo"
                            data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                O estudante fará um cadastro e enviará suas informações para ter acesso ao equipamento.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingThree">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                Sobre pontos de wi-fi
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree"
                            data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                Em parceria com as prefeituras das cidades, será fornecido salas com acesso à internet e os equipamentos, basta o estudante agendar horário e data.
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Accordion