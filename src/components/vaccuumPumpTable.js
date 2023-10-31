import { tab } from '@testing-library/user-event/dist/tab';
import './vacuumPumpTable.css';
import React from 'react';

const VacuumPumpTable = (props) => {
    let data = props.data

    const tables =
        <div className='tables-wrapper'>
            {Object.keys(data).map((product) => {
                let tableData = data[product];

                let tableHeader = <thead><tr>{Object.keys(tableData).map((label) => (<th className='table-cell' style={{ 'color': '#18A2A8', 'border-bottom': '1px solid #E9E8E8' }}>{label}</th>))}</tr></thead>
                let tableBody = <tbody>{
                    tableData[{'EN': 'Model', 'ES': 'Modelo', 'RU': 'Модель'}[props.language]].map((model, index) => {
                        let tableCol = Object.keys(tableData).map((label) => (<td className='table-cell'>{tableData[label][index]}</td>))

                        return (
                            <tr style={index % 2 == 1 ? {'background-color': '#E9E8E8'} : null} key={model}>
                                {tableCol}
                            </tr>
                        )
                    })
                }</tbody>



                let table = (
                    <div className='table-wrapper'>
                        <div className='table-title'>{product}</div>
                        {tableHeader}
                        {tableBody}
                    </div>
                )


                return table
            })}
        </div>

    return tables;
};

export default VacuumPumpTable;
