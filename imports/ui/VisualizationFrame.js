import React from 'react';
import VisualizationPlot from './VisualizationPlot.js'

export default class VisualizationFrame extends React.Component
{
    render()
    {
        return (< div >
                    < h1 > UserPage < /h1> <br />
                    < VisualizationPlot />
                </ div > );
    }
}