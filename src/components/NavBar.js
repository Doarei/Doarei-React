import React from "react";
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <>

      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">DOAREI</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"
            aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link " aria-current="page" to="/">Página Inicial</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Sobre">Sobre o Projeto</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Contato">Contato</Link>
              </li>

              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="#" id="navbarDarkDropdownMenuLink" role="button"
                  data-bs-toggle="dropdown" aria-expanded="false">
                  Conheça
                </Link>
                <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                  <li><Link className="dropdown-item" to="/Doacao">FAÇA SUA DOAÇÃO</Link></li>
                  <li><Link className="dropdown-item" to="/Emprestar">EMPRESTIMO DE EQUIPAMENTOS</Link></li>
                  <li><Link className="dropdown-item" to="/Pontos">PONTOS DE ACESSO A INTERNET</Link></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>

    </>

  )
}

export default NavBar