import React from 'react';
import VisualizationPlot from './VisualizationPlot.js'

export default class VisualizationFrame extends React.Component
{

    constructor(props) 
    {
        super(props);
    }
    render()
    {
        return (< div >
                    < h1 > {this.props.message} < /h1> <br />
                    < VisualizationPlot/>
                </ div > );
    }
}