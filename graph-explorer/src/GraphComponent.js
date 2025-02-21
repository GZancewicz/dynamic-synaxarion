import React, { useEffect, useState } from 'react';
import { Graph } from 'react-d3-graph';

const GraphComponent = () => {
    const [data, setData] = useState({ nodes: [], links: [] });

    useEffect(() => {
        fetch('/graphData.json')
            .then(response => response.json())
            .then(data => setData(data));
    }, []);

    const myConfig = {
        nodeHighlightBehavior: true,
        node: {
            color: 'lightblue',
            size: 120,
            highlightStrokeColor: 'blue',
        },
        link: {
            highlightColor: 'lightblue',
            renderLabel: true,
        },
        directed: true,
    };

    return <Graph id="graph-id" data={ data } config={ myConfig } />;
};

export default GraphComponent; 