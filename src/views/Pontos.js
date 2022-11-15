import React from "react";
import CarouselPonto from "../components/CarouselPontos";

function Pontos() {
  return (

    <>
      <div className="container">
        <CarouselPonto />

        <div class="container-fluid">
          <h4 class="mt-4">Agendamento para estudos</h4>
          <div class="row">
            <form class="row ">
              <div class="col-md-6">
                <label for="inputEmail4" class="form-label">Nome Completo:</label>
                <input type="email" class="form-control" id="inputEmail4" />
              </div>
              <br />
              <div class="col-md-2">
                <label for="inputcpf" class="form-label">CPF:</label>
                <input type="cpf" class="form-control" id="inputcpf" />
              </div>
              <br />
              <div class="col-md-2">
                <label for="inputrg" class="form-label">Data de Nascimento:</label>
                <input type="date" class="form-control" id="inputdate" />
              </div>
              <br />
              <div class="col-md-6">
                <br />
                <label for="inputState" class="form-label">Selecione um ponto de estudo:</label>
                <select class="form-select" aria-label="Default select example">
                  <option>Museu Osório César (Prefeitura de Franco da Rocha-SP)</option>
                  <option>Biblioteca (Prefeitura de Mauá-SP)</option>
                  <option>Centro de Esportes (Prefeitura de Recife-PE)</option>
                  <option>Biblioteca (Prefeitura de Minas Gerais-MG)</option>
                  <option>Museu do Amanhã (Prefeitura do Rio de Janeiro-RJ)</option>
                </select>
              </div>
              <br />
              <div class="col-md-2">
                <br />
                <label for="inputrg" class="form-label">Data:</label>
                <input type="date" class="form-control" id="inputdate" />
              </div>
              <br />
              <div class="col-md-2">
                <br />
                <label for="inputrg" class="form-label">Horário:</label>
                <input type="time" class="form-control" id="inputdate" />
              </div>

              <br /><br />

              <div class="col-3">
                <br />
                <button type="submit" class="btn btn-primary">Enviar</button>
              </div>
            </form>
          </div>
        </div>

      </div>
    </>

  )
}

export default Pontos