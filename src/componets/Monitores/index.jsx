import React from 'react';

import useFetch from '../../Hooks/useFetch';

import Reloj from '../Reloj';
import Mapa from '../Mapa';
import Servicios from './Servicios';
import Moviles from './Moviles';

import Loading  from '../Loading';
import Error500 from '../Errors/500';
import './index.css';


const URL_LISTAR_TRACK = 'http://latinsoft.cl/api/trackers/tpublico/antofagasta/linea104';

const MonitorFrecuencia = () => {  
  const { data, loading, error } = useFetch(URL_LISTAR_TRACK);
  const moviles = data.Moviles;
  
  const renderMapa = () => {
    if( loading ) return <Loading />;
    if( error) return <Error500 msg="Falla la Comunicacion con El Servidor." />;

    const rutas = [
      'http://latinsoft.cl/archivos/circuitos/antofagasta/linea104/RUTA_104_IDA.kml', 
      'http://latinsoft.cl/archivos/circuitos/antofagasta/linea104/RUTA_104_REG.kml'
    ];
    return <Mapa moviles={ moviles } rutas={rutas} />;
  }

  const renderMoviles = () => {
    if( loading ) return <Loading />;
    if( error) return <Error500 msg="Falla la Comunicacion con El Servidor." />;
    return <Moviles moviles={ moviles }/>;
  }

  return (
    <div className="row">
        <div className="col s4">
            <Reloj />
            { renderMapa() }
        </div>
        <div className="col s8">
            <Servicios />
            { renderMoviles() }
        </div>       
    </div>
  );
}

export default MonitorFrecuencia;