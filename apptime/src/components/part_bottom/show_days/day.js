import React from 'react'

export default function Day(props){
    return (
        <li className="box-clima_day"> 
            <div className="clima_day">
                <span className="box_day">TUE</span>
                <img src="./assets/img/tempo/rain_day_night@2x.png" className="img-show_time" width="40"/>
                <span className="box_graus">60</span>
            </div>
        </li>
    )
}