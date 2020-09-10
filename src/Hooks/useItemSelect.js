import React from 'react';

const useItemSelect = (param) => {
    const [ objeto, setObjeto ] = React.useState(param); 
    
    const handleClick = (objeto) => {
        setObjeto(objeto);
        console.log(objeto);
        //$('#modalServicio').modal('show');
    }
    return { objeto, handleClick };
}


export default useItemSelect;