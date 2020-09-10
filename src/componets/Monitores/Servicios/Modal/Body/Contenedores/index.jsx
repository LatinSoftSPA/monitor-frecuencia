import React from 'react';

import FormServicio   from './Formularios/Servicio';
import FormConductor  from './Formularios/Conductor';
import FormMovil      from './Formularios/Movil';

const Formularios = ( {servicio} ) => {
  return (
    <div className="tab-content" id="pills-tabContent">
      <div className="tab-pane fade show active" id="tab_001" role="tabpanel">
        <FormServicio servicio = { servicio } />
      </div>
      <div className="tab-pane fade" id="tab_002" role="tabpanel">
        <FormConductor servicio = { servicio } /></div>
      <div className="tab-pane fade" id="tab_003" role="tabpanel">
        <FormMovil servicio = { servicio } /></div>
    </div>
  )
} 
export default Formularios;