import React, { Component } from 'react';

class ShowTime extends Component {
    render() {
        return (
            <div className='content-show-time'>
                <div className='show-time'>
                    <div className="box-graus_day">
                        <div className="num_graus">{this.props.graus}</div>
                        <span className="day">MONDAY 27</span>
                    </div>
                    <div className="">
                    <img src={`./assets/img/tempo/${this.props.img}`} className="img-show_time" />
                    <div className="">4mph / 67</div>
                    </div>
                </div>
            </div>
        );
    }
}
export default ShowTime;