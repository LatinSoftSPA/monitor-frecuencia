import React from 'react';

const Movil = ( {servicio} ) => {
    const { nume_movil, pate_movil, codi_equip } = servicio;
    return (
        <form>
            <div className="form-group row">
                <label forhtml="nume_movil" className="col-sm-2 col-form-label col-form-label-sm">Movil</label>
                <div className="col-sm-5">
                    <input className="form-control form-control-sm" type="text" name="nume_movil" value={ nume_movil } />
                </div>
                <div className="col-sm-5">
                    <input className="form-control form-control-sm" type="text" name="pate_movil" value={ pate_movil } />
                </div>
            </div>
            <div className="form-group row">
                <label forhtml="codi_equip" className="col-sm-2 col-form-label col-form-label-sm">Equipo</label>
                <div className="col-sm-10">
                    <input className="form-control form-control-sm" type="text" name="codi_equip" value={ codi_equip }  />
                </div>
            </div>
        </form>
    )
}  
export default Movil;