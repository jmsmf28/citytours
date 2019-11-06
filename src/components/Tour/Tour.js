import React, { Component } from 'react';
import './Tour.scss';
//import { FontAwesomeIcon } from '@fortawesome/fontawesome-free';
import imgDefault from '../../img/london.jpeg';

export default class Tour extends Component {
    render() {
        return (
            <article className="tour">
                <div className="img-container">
                    <img src={imgDefault} alt="" />
                    <span className="close-btn">x
                        <i className="fas fa-window-close" />
                    </span>
                </div>
                <div className="tour-info">
                    <h3>city</h3>
                    <h4>name</h4>
                    <h5>info <span className="">v<i className="fas fa-caret-square-down" /></span></h5>
                    <p>lorem ipsum dolor sit maet consecteur 
                        adpsicing elite. Harum debitis.</p>
                </div>              
            </article>
          
        )
    }
}
