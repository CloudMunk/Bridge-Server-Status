import cockpit from 'cockpit';
import React from 'react';
import './app.scss';

// Pages
import HomePage from './pages/homepage/homepage.component.jsx';
// Components
import Header from './components/header/header.component.jsx';

const _ = cockpit.gettext;

export class Application extends React.Component {
    constructor() {
        super();
        this.state = { hostname: _("Unknown") };

        cockpit.file('/etc/hostname').watch(content => {
            this.setState({ hostname: content.trim() });
        });
    }

    render() {
        return (
            <div>
                <Header />
                <HomePage />
            </div>
        );
    }
}
