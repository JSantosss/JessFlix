//sempre importar o react
import React from 'react';
//import do logo
import Logo from '../../assets/img/Logo.png';
//import do CSS do Menu
import './Menu.css';
//import do botão
import ButtonLink from './components/ButtonLink';

//component do Menu, sempre usar letra maiúscula
//no nome
function Menu() {
    return (
        <nav className="Menu">
            <a href="/"> 
              <img className="Logo" src={Logo} alt="JeFlix Logo"/>
            </a>

            <ButtonLink className="ButtonLink" href="/">
                Novo vídeo
            </ButtonLink>


        </nav>
    );
}

//exportação para conseguir usar esse componente
//em outras páginas
export default Menu;