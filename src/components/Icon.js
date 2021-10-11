import React from 'react';

export default function Icon({ direct, itemName, className }) {
    return (
        <img className={className ? className : 'icon'} src={direct} alt={itemName + ' icon'} />
    )
}