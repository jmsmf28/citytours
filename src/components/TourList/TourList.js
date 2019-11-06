import React, { Component } from 'react';
import './TourList.scss';
import Tour from '../Tour/Tour';
import { tourData } from '../../tourData';
import { createUnionTypeAnnotation } from '@babel/types';

export default class TourList extends Component {
    state={
        tours: tourData
    };
    /*{ city, name, img, info} = {tours};*/
    render() {
        const {tours} = this.state;
        return (
            <section className="tourlist">
             
            </section>
        )
    }
}
