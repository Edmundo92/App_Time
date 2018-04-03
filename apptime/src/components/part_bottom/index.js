import React, { Component } from 'react';
import './index.css';

import ShowTime from './show_time/show_time';
import ShowDays from './show_days/show_days'; 

class PartBottom extends Component {
    render() {
        return (
            <div className='bottom'>
                <ShowTime graus="80" img="rain_day_night@2x.png"/>
                <ShowDays />
            </div>
        );
    }
}
export default PartBottom;