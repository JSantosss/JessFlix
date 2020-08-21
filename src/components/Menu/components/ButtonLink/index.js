import React from 'react';
//sempre importar o react

//component do Menu, sempre usar letra maiúscula
//no nome
function ButtonLink(props) {
    //props => { className: "o que alguém passar", href: "/"}
 
    //parei no 1:03 da aula (uma hora) e já instalei os components necessários
    
    return (
        <a href={props.href} className={props.className}>
           Novo Vídeo
        </a>
    );
}

//exportação para conseguir usar esse componente
//em outras páginas
export default ButtonLink;