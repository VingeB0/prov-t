import React, { Component, Fragment } from 'react';
import {NavLink, BrowserRouter as Router, Route} from 'react-router-dom';

class NavList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            navLinks: [
                'menu',
                'catering',
                'about us',
                'contact'
            ]
        };
    }

    render() {
        const {navLinks} = this.state;

        const Child = ({ match }) => (
            <div>
                <h3>ID: {match.params.id}</h3>
            </div>
        );

        const navItems = navLinks.map(item => <li key={item}>
            <NavLink
                to = {`/${item}`}
                activeStyle = {{color: 'red'}}
            >
                {item}
            </NavLink>
        </li>);

        return (
            <nav>
                <ul>
                    <Router>
                        <Fragment>
                            {navItems}
                            <Route path="/:id" component={Child} />
                        </Fragment>
                    </Router>
                </ul>
            </nav>
        );
    }
}
//route do separate component and render new component link
export default NavList;
