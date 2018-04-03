import React from 'react'

export default function Day(props){
    return (
        <li className="box-clima_day"> 
            <div className="clima_day">
                <span className="box_day">{props.day}</span>
                <img src={`./assets/img/tempo/${props.img}`} className="img-show_time" width="40"/>
                <span className="box_graus">{props.graus}</span>
            </div>
        </li>
    )
}