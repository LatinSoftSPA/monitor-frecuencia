import React from 'react';

import useFetch from '../../../Hooks/useFetch';

import Loading  from '../../Loading';
import Error500 from '../../Errors/500';
//import Error404 from '../../Errors/404';

import Listado from './ListResults';

const URL_LISTAR_SERVI = 'http://gestra.latinsoft.cl/api/monitores/listar/96711420/14/actual';

const Servicios = () => {
    const { data, loading, error } = useFetch(URL_LISTAR_SERVI);
    
    const renderServicios = () => {
        if( loading ) return <Loading />;
        if( error ) return <Error500 msg="No Se Encontraron Datos en Nuestas DB" />;
        return <Listado data = { data }  />;
    }

    return renderServicios();
}

export default Servicios;