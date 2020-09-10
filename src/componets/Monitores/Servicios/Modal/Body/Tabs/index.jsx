import React from 'react';

const Tabs = () => {
    return (
        <ul className="nav nav-pills nav-justified" id="pills-tab" role="tablist">
            <li className="nav-item">
                <a className="nav-link active" id="tab-001" data-toggle="pill" href="#tab_001" role="tab" aria-controls="tab_001" aria-selected="true">
                    Servicio
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link" id="tab-002" data-toggle="pill" href="#tab_002" role="tab" aria-controls="tab_002" aria-selected="false">
                    Conductor
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link" id="tab-003" data-toggle="pill" href="#tab_003" role="tab" aria-controls="tab_003" aria-selected="false">
                    Movil
                </a>
            </li>
        </ul>
    )
}
export default Tabs;