import React from 'react';

import './index.css';
import Error500Img from '../../../img/500.png';

const Error500 = (props) => (
    <div className="text-center">
        <h4 className="Error_Text">
            Error:
            <b> { props.msg }</b>
        </h4>
        <img src={Error500Img} alt="500 Unexpected Error" className="Error_Image" />
    </div>
)

export default Error500;