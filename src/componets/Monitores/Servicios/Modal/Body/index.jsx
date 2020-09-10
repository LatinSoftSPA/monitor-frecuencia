import React from 'react'

import Tabs         from './Tabs'
import Contenedores from './Contenedores';

const Body = ( {servicio} ) => {
    return (
        <React.Fragment>
            <Tabs />
            <Contenedores servicio = { servicio } />
        </React.Fragment>
    )
}

export default Body;