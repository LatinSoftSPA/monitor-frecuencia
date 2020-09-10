import React from 'react';

import useItemSelect from '../../../../Hooks/useItemSelect';

import ListItem from '../ListItem';


const Item = (listado, handleClick) => (
    listado.map( obj => 
        <ListItem key={ obj.Codigo } nume_movil={ obj.Movil } codi_movil={ obj.Codigo } total_eventos={ obj.Eventos.length } handleClick = { handleClick } />
    )
)

const Listado = ( {moviles} ) => {
    const { objeto, handleClick } = useItemSelect([]);
    if(objeto)          //TODO

    return (
        <div className="boxMoviles">
            <ul className="nav nav-pills nav-justified">
                { Item(moviles, handleClick) }
            </ul>
        </div>
    );
}

export default Listado;