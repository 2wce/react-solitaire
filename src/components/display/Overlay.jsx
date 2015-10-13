import React from 'react';
import { Colors, Dimensions } from '../../constants';

const Overlay = ({ backgroundColor }) => {
    return <div style={{
        backgroundColor,
        position: 'absolute',
        top: 0,
        left: 0,
        opacity: .3,
        width: Dimensions.Card.width,
        height: Dimensions.Card.height
    }} />;

}

export default Overlay;
