import React from 'react';

import './header.styles.scss';

const Header = () => (
    <div className="header">
        <img className="logo" src={require('https://i.imgur.com/TWgMq9J.jpg')} alt="logo" />
        <h1 className="title">Bridge Technologies Test</h1>
    </div>
);

export default (Header);
