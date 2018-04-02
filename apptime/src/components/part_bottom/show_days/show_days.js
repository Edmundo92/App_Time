import React, { Component } from 'react';

import Day from './day';

class ShowDays extends Component {
    render() {
        return (
            <div className='content-show_days'>
                <ul>
                    <Day />
                    <Day />
                    <Day />
                    <Day />
                    <Day />
                    <Day />
                </ul>
            </div>
        );
    }
}
export default ShowDays;