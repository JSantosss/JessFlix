//sempre importar o react
import React from 'react';
//import do logo
import Logo from '../../assets/img/Logo.png';
//import do CSS do Menu
import './Menu.css';
//import do botão
//import ButtonLink from './components/ButtonLink';
import Button from '../Button';
//component do Menu, sempre usar letra maiúscula
//no nome
function Menu() {
    return (
        <nav className="Menu">
            <a href="/"> 
              <img className="Logo" src={Logo} alt="JeFlix Logo"/>
            </a>

            <Button as="a" className="ButtonLink" href="/">
                Novo vídeo
            </Button>


        </nav>
    );
}

//exportação para conseguir usar esse componente
//em outras páginas
export default Menu;