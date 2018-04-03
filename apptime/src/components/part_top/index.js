import React, { Component } from 'react';
import './index.css';

import Nav from '../nav/nav'

class PartTop extends Component {
    render() {
        return (
            <div className='top'>
                <h1 className="title">Buch|<span className="title_decoration">arest, RO</span></h1>
                <div className="box_location">
                    <img src="" />
                    <span className="location"></span>
                    <span className="hours"></span>
                </div>
                <h2 className="inf_map">LATEST LOCATIONS</h2>
                <Nav />
            </div>
        );
    }
}
export default PartTop;