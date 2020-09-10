import React from 'react';

import useItemSelect from '../../../../Hooks/useItemSelect';

import ListItem         from '../ListItem';
import ModalServicio    from '../Modal';

const Item = (listado, handleClick) => (
    listado.map( obj => 
        <ListItem key={ obj.codi_servi } obj = { obj } handleClick = { handleClick } />
    )
)

const style = {'backgroundColor':'#01579b', 'color' : '#fff'};

const Listado = ( { data } ) => {
    const { objeto, handleClick } = useItemSelect([]);
    const listado = data;
 
    return (
        <div className="boxServicios">
            <table className="striped responsive-table">
                <thead style={style}>
                    <tr>
                        <th className="text-center">Movil</th>
                        <th className="text-center">Patente</th>
                        <th className="text-center">Frec.</th>
                        <th className="text-center">Inicio</th>
                        <th className="text-center">Termino</th>
                        <th className="text-left d-none d-md-block">Conductor</th>
                    </tr>
                </thead>
                <tbody>
                { Item(listado, handleClick) }                  
                </tbody>
            </table>

            <ModalServicio servicio = { objeto } />
        </div>
    );
}

export default Listado;