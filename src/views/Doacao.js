import React from "react";
import CarouselDoacao from "../components/CarouselDocao";

function Doacao() {
    return (

        <>
            <CarouselDoacao />

            <div className="container">
                <div className="container-fluid">
                    <br />
                    <h4 className="mt-4">Formulário para doação</h4>
                    <div className="row">
                        <form className="row ">
                            <div className="col-md-6">
                                <br />
                                <label for="inputEmail4" className="form-label">Nome Completo:</label>
                                <input type="email" className="form-control" id="inputEmail4" />
                            </div>
                            <div className="col-md-6">
                                <br />
                                <label for="inputEmail4" className="form-label">E-mail:</label>
                                <input type="password" className="form-control" id="inputPassword4" />
                            </div>
                            <div className="col-12">
                                <br />
                                <label for="inputAddress" className="form-label">Endereço:</label>
                                <input type="text" className="form-control" id="inputAddress" placeholder="Rua, Avenida" />
                            </div>
                            <div className="col-12">
                                <br />
                                <label for="inputAddress2" className="form-label">Complemento:</label>
                                <input type="text" className="form-control" id="inputAddress2" placeholder="Apartamento, Bloco" />
                            </div>
                            <div className="col-md-6">
                                <br />
                                <label for="inputCity" className="form-label">Cidade:</label>
                                <input type="text" className="form-control" id="inputCity" />
                            </div>
                            <div className="col-md-4">
                                <br />
                                <label for="inputState" className="form-label">Estado:</label>
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
                                <label for="inputZip" className="form-label">CEP:</label>
                                <input type="text" className="form-control" id="inputZip" />
                            </div>
                            <div className="col-6">
                                <div className="form-check">
                                    <div className="col-md-4">
                                        <br />
                                        <label for="inputState" className="form-label">Qual equipamento será doado?</label>
                                        <select id="inputState" className="form-select">
                                            <option selected>Selecione</option>
                                            <option>Tablet</option>
                                            <option>Smartphone</option>
                                            <option>Computador</option>
                                            <option>Notebook</option>
                                        </select>
                                    </div>
                                </div>
                                <br />
                                <div className="col-12">
                                    <div className="form-check">
                                        <div className="col-md-8">
                                            <label for="inputState" className="form-label">Quer que retire o equipamento?</label>
                                            <br />
                                            <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                                                <label className="form-check-label" for="inlineCheckbox1">Sim</label>
                                            </div>
                                            <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2" />
                                                <label className="form-check-label" for="inlineCheckbox2">Não, vou levar até um ponto wi-fi.</label>
                                            </div>
                                        </div>
                                    </div>
                                    <br />

                                    <div className="col-12">
                                        <div className="form-check">
                                            <div className="col-md-4">
                                                <label for="inputState" className="form-label">Selecione um ponto wi-fi.</label>
                                                <select id="inputState" className="form-select">
                                                    <option selected>Selecione</option>
                                                    <option>Museu Osório César (Prefeitura de Franco da Rocha-SP)</option>
                                                    <option>Biblioteca (Prefeitura de Mauá-SP)</option>
                                                    <option>Centro de Esportes (Prefeitura de Recife-PE)</option>
                                                    <option>Biblioteca (Prefeitura de Minas Gerais-MG)</option>
                                                    <option>Museu do Amanhã (Prefeitura do Rio de Janeiro-RJ)</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <br />
                                <div className="col-3">
                                    <button type="submit" className="btn btn-primary">Enviar</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </>

    )
}

export default Doacao