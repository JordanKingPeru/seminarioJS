import React        from 'react';
import d3           from 'd3';

export default class VisualizationFrame extends React.Component
{
    constructor(props) 
    {
        super(props);
    }

    goToResults(e)
    {
        window.location.href = "http://localhost:9002";
    }
    render()
    {
        return (<div>
                    <h1>Waiting</h1>
                    < button onClick = { this.goToResults }> Go To Results </button><br />
                </div>);
    }
}