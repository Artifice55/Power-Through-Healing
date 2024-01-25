import React from 'react';

function ServiceCard( { service }) {
        return (
            <li className="card">
                <h2>{ service.name}</h2>
                <p>{ service.description}</p>
            </li>
        
            
)
}


export default ServiceCard