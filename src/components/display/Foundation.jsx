import React from 'react';

const Foundation = ({ children }) => {
    return (
        <div style={{
            backgroundColor: '#388E3C',
            border: '1px solid #388E3C',
            borderRadius: 2,
            borderStyle: 'dotted',
            boxSizing: 'border-box',
            width: 125,
            height: 175,
        }}>
            {children}
        </div>
    );
};

export default Foundation;
