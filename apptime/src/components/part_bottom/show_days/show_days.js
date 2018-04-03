import React, { Component } from 'react';

import Day from './day';

class ShowDays extends Component {
    render() {
        return (
            <div className='content-show_days'>
                <ul className="ul-clima_day">
                    <Day day="TUE" graus="60" img="mostly_cloudy_day_night@2x.png"/>
                    <Day day="WED" graus="72" img="fair_day@2x.png"/>
                    <Day day="THU" graus="63" img="mostly_cloudy_day_night@2x.png"/>
                    <Day day="FRI" graus="65" img="rain_day_night@2x.png"/>
                    <Day day="SAT" graus="18" img="partly_cloudy_night@2x.png"/>
                    <Day day="SUN" graus="69" img="mostly_cloudy_day_night@2x.png"/>
                </ul>
            </div>
        );
    }
}
export default ShowDays;