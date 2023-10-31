import './sizeChart.css';
import React from 'react';

const SizeChart = (props) => {
    const data = props.data;
    let labels = new Set([]);
    let itemMap = {};

    const items = Object.entries(data).map(([item, value]) => {
        let labelMap = {};
        Object.entries(value).map(([label, value]) => {
            labels.add(label)
            labelMap[label] = ((<div>{value}</div>))
        })

        itemMap[item] = labelMap
    })

    const labelTable = Array.from(labels).map((label) => {
        return <div className='table-entry label'>{label}</div>
    })

    const itemTable = Object.entries(itemMap).map(([item, values]) => {
        let itemRows = Array.from(labels).map((label) => {
            return (<div className='table-entry'>{values[label]}</div>)
        })

        return (
            <>
                <div className='table-row'>
                    <div className='table-entry'>{item}</div>
                    {itemRows}
                </div>
            </>
        )
    })

    return (
        <div className='size-table'>
            <div className='table-row'><div className='table-entry label'>Item#</div>{labelTable}</div>
            {itemTable}
        </div>
    );

}

export default SizeChart;