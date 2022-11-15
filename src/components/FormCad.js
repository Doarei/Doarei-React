import React from "react"

function Formulario() {
    return (

        <>
            <div className="container">
                <h4 className="mt-4">Faça seu cadastro</h4>
                <div className="row">
                    <form className="row ">
                        <div className="col-md-6">
                            <label for="inputEmail4" className="form-label">E-mail:</label>
                            <input type="email" className="form-control" id="inputEmail4" />
                        </div>
                        <div className="col-md-6">
                            <label for="inputPassword4" className="form-label">Senha:</label>
                            <input type="password" className="form-control" id="inputPassword4" />
                        </div>
                        <div className="col-12">
                            <label for="inputAddress" className="form-label">Endereço:</label>
                            <input type="text" className="form-control" id="inputAddress" placeholder="Rua, Avenida" />
                        </div>
                        <div className="col-12">
                            <label for="inputAddress2" className="form-label">Complemento:</label>
                            <input type="text" className="form-control" id="inputAddress2" placeholder="Apartamento, Bloco" />
                        </div>
                        <div className="col-md-6">
                            <label for="inputCity" className="form-label">Cidade:</label>
                            <input type="text" className="form-control" id="inputCity" />
                        </div>
                        <div className="col-md-4">
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
                            <label for="inputZip" className="form-label">CEP:</label>
                            <input type="text" className="form-control" id="inputZip" />
                        </div>
                        <br />
                        <div className="col-12">
                            <br />
                            <button type="submit" className="btn btn-primary">Enviar</button>
                        </div>
                    </form>
                </div>
            </div>

        </>

    )
}

export default Formulario