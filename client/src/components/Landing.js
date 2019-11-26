import React from 'react';
import Background from '../media/emaily-landing.png'

const Landing = () => {
    return (
        <div className="Landing start-splash-header-content" style={{ textAlign: 'center' }}>
            <div className="img">
                <img src= { Background } alt="Emaily Info" /> 
            </div>
        </div>
    )
}

export default Landing;