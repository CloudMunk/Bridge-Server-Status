import React from 'react';

import './header.styles.scss'

const Header = () => (
    <div className="header">
        <img 
            className="logo"
            src={require('../../assets/bridgeLogo.jpg')} 
            alt="logo"
        />
        <h1 className="title">Bridge Technologies Test</h1>
    </div>
);

export default (Header);