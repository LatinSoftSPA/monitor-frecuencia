import React from 'react';

const Conductor = ( {servicio} ) => {
    const {docu_perso, conductor } = servicio;
    return (
        <form>
            <div className="form-group row">
                <label forhtml="docu_perso" className="col-sm-2 col-form-label col-form-label-sm">Documento</label>
                <div className="col-sm-10">
                    <input className="form-control form-control-sm" type="text" name="docu_perso" value={ docu_perso } />
                </div>
            </div>
            <div className="form-group row">
                <label forhtml="conductor" className="col-sm-2 col-form-label col-form-label-sm">Nombre</label>
                <div className="col-sm-10">
                    <input className="form-control form-control-sm" type="text" name="conductor" value={ conductor } />
                </div>
            </div>
        </form>
    )
}  
export default Conductor;