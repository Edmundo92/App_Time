import React, { Component } from 'react';

class Nav extends Component {
    render() {
        return (
            <nav className=''>
                <ul className="list_menu">
                    <li className="menu-item"><a href="">WEATHER</a></li>
                    <li className="menu-item"><a href="">NEWS & EVENTS</a></li>
                    <li className="menu-item"><a href="">GALLERY (30)</a></li>
                </ul>
            </nav>
        );
    }
}
export default Nav;