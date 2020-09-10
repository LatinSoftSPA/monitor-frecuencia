import React from 'react';

const style = {'color':'#fff'};

const Item = ({ obj, handleClick }) => {
    const { nume_movil, pate_movil, frecuencia, INI, TER, conductor } = obj;
    return (                 
        <tr  style={style} onClick = { () => handleClick(obj) } >
            <td className="text-center flow-text"><b>{ nume_movil }</b></td>
            <td className="text-center">{ pate_movil }</td>
            <td className="text-center">({ frecuencia })</td>
            <td className="text-center flow-text"><b>{ INI }</b></td>
            <td className="text-center">{ TER }</td>
            <td className="text-nowrap d-none d-md-block">{ conductor }</td>
        </tr>
    )    
}

export default Item;