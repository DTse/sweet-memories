import React, { Component } from 'react';
import '../App.css';

//import root from 'window-or-global';

class Header extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isTop: true
        };
    }

    componentWillMount() {
        if (process.browser) {
            document.addEventListener('scroll', () => {
                const isTop = window.scrollY < 100;
                if (isTop !== this.state.isTop) {
                    this.setState({ isTop });
                }
            });
        }

    }

    render() {
        return (
            <header className={this.state.isTop ? "App-header-top App-header" : "App-header"}>
                <div className="header-wrapper">
                    <ul>
                        <li className={this.state.isTop ? "logo-top logo" : "logo logo-scroll"}><div className="logoImage" /><div className="effect" /></li>
                    </ul>
                </div>
            </header>
        );
    }
}

export default Header;
