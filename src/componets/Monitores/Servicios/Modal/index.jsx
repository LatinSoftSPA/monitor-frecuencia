import React from 'react';

import Body from './Body'

const Modal = ( { servicio, handleSubmit } ) => {  
  const { nume_movil, INI } = servicio;
  return (
    <div className="modal fade" id="modalServicio">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header bg-dark">
            <b className="modal-title">{ `Movil : ${nume_movil} - Servicio ${INI}` }</b>
          </div>
          <div className="modal-body bg-light">
            <Body servicio = { servicio } />
          </div>
          <div className="modal-footer bg-dark">
            <button type="button" className="btn btn-sm btn-success">Guardar</button>
            <button type="button" className="btn btn-sm btn-danger" data-dismiss="modal">Cancelar</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal;