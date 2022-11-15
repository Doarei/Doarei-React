import React from "react";
import CarouselEmpre from "../components/CarouselEmpre";

function Emprestar() {
    return (

        <>
            <CarouselEmpre />
            <div className="container">
                <div className="container-fluid">
                    <h4 className="mt-4">Formulário de empréstimo</h4>
                    <br />
                    <div className="row">
                        <form className="row ">
                            <div className="col-md-6">
                                <br />
                                <label htmlFor="inputEmail4" className="form-label">Nome Completo:</label>
                                <input type="email" className="form-control" id="inputEmail4" />
                            </div>
                            <div className="col-md-2">
                                <br />
                                <label htmlFor="inputcpf" className="form-label">CPF:</label>
                                <input type="cpf" className="form-control" id="inputcpf" />
                            </div>
                            <div className="col-md-2">
                                <br />
                                <label htmlFor="inputrg" className="form-label">RG:</label>
                                <input type="rg" className="form-control" id="inputrg" />
                            </div>
                            <div className="col-md-2">
                                <br />
                                <label htmlFor="inputrg" className="form-label">Data de Nascimento:</label>
                                <input type="date" className="form-control" id="inputdate" />
                            </div>


                            <div className="col-12">
                                <br />
                                <label htmlFor="inputAddress" className="form-label">Endereço:</label>
                                <input type="text" className="form-control" id="inputAddress" placeholder="Rua, Avenida" />
                            </div>
                            <div className="col-12">
                                <br />
                                <label htmlFor="inputAddress2" className="form-label">Complemento:</label>
                                <input type="text" className="form-control" id="inputAddress2" placeholder="Apartamento, Bloco" />
                            </div>

                            <div className="col-md-4">
                                <br />
                                <label htmlFor="inputCity" className="form-label">Cidade:</label>
                                <input type="text" className="form-control" id="inputCity" />
                            </div>
                            <div className="col-md-2">
                                <br />
                                <label htmlFor="inputState" className="form-label">Estado:</label>
                                <select id="inputState" className="form-select">
                                    <option selected>Selecione</option>
                                    <option>AC</option>
                                    <option>AL</option>
                                    <option>AP</option>
                                    <option>AM</option>
                                    <option>BA</option>
                                    <option>CE</option>
                                    <option>DF</option>
                                    <option>ES</option>
                                    <option>GO</option>
                                    <option>MA</option>
                                    <option>MT</option>
                                    <option>MS</option>
                                    <option>MG</option>
                                    <option>PA</option>
                                    <option>PB</option>
                                    <option>PR</option>
                                    <option>PE</option>
                                    <option>PI</option>
                                    <option>RJ</option>
                                    <option>RN</option>
                                    <option>RS</option>
                                    <option>RO</option>
                                    <option>RR</option>
                                    <option>SC</option>
                                    <option>SP</option>
                                    <option>SE</option>
                                    <option>TO</option>
                                </select>
                            </div>

                            <div className="col-md-2">
                                <br />
                                <label htmlFor="inputZip" className="form-label">CEP:</label>
                                <input type="text" className="form-control" id="inputZip" />
                            </div>
                            <div className="mb-3">
                                <br />
                                <label htmlFor="formFile" className="form-label">Documentos:</label>
                                <input className="form-control" type="file" id="formFile" />
                            </div>
                            <div className="col-md-4">
                                <br />
                                <label htmlFor="inputState" className="form-label">Selecione o equipamento disponível:</label>
                                <select className="form-select" aria-label="Default select example">
                                    <option selected>Selecione</option>
                                    <option>Tablet</option>
                                    <option>Smartphone</option>
                                    <option>Computador</option>
                                    <option>Notebook</option>
                                </select>
                            </div>

                            <div className="col-md-4">
                                <br />
                                <label htmlFor="inputState" className="form-label">Selecione um ponto de retirada:</label>
                                <select className="form-select" aria-label="Default select example">
                                    <option>Museu Osório César (Prefeitura de Franco da Rocha-SP)</option>
                                    <option>Biblioteca (Prefeitura de Mauá-SP)</option>
                                    <option>Centro de Esportes (Prefeitura de Recife-PE)</option>
                                    <option>Biblioteca (Prefeitura de Minas Gerais-MG)</option>
                                    <option>Museu do Amanhã (Prefeitura do Rio de Janeiro-RJ)</option>
                                </select>
                            </div>
                        </form>
                    </div>
                </div>
                <br />
                <div className="col-3">
                    <button type="submit" className="btn btn-primary">Enviar</button>
                </div>
            </div>
        </>
    )
}

export default Emprestar