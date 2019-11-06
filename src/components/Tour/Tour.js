import React, { Component } from 'react';
import './Tour.scss';
import { FontAwesomeIcon } from '@fortawesome/fontawesome-free';

export default class Tour extends Component {
    render() {
        return (
            <article>
                <div className="img-container">
                    <img width="200" src='https://images.pexels.com/photos/2965505/pexels-photo-2965505.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' alt="" />
                </div>
                <span className="close-btn">
                    <i className="fas fa-window-close" />
                    <FontAwesomeIcon icon="" />
                </span>
            </article>
          
        )
    }
}
