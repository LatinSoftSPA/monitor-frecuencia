import React from 'react';

const Servicio = ( {servicio} ) => {
    const { codi_circu, nomb_circu, codi_servi, INI, TER } = servicio;
    return (
        <form>
            <div className="form-group row">
                <label forhtml="codi_circu" className="col-sm-2 col-form-label col-form-label-sm">Circuito</label>
                <div className="col-sm-2">
                    <input className="form-control form-control-sm" type="text" name="codi_circu" value={ codi_circu }  />
                </div>
                <div className="col-sm-8">
                    <input className="form-control form-control-sm" type="text" name="nomb_circu" value={ nomb_circu }  />
                </div>
            </div>
            <div className="form-group row">
                <label forhtml="codi_servi" className="col-sm-2 col-form-label col-form-label-sm">COD</label>
                <div className="col-sm-10">
                    <input className="form-control form-control-sm" type="text" name="codi_servi" value={ codi_servi } />
                </div>
            </div>
            <div className="form-group row">
                <label forhtml="INI" className="col-sm-2 col-form-label col-form-label-sm">Servicio</label>
                <div className="col-sm-5">
                    <input className="form-control form-control-sm" type="text" name="INI" value={ INI } />
                </div>
                <div className="col-sm-5">
                    <input className="form-control form-control-sm" type="text" name="TER" value={ TER } />
                </div>
            </div>   
        </form>
    )
}

export default Servicio;