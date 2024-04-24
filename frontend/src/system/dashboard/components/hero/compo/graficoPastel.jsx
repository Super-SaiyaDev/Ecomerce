import React from 'react'
import { PieChart, Pie, Tooltip, Cell} from 'recharts';

const GraficoPastel = () => {
    const data = [
        { name: 'Group A', value: 400 },
        { name: 'Group B', value: 200 },
        { name: 'Group C', value: 200 },
        { name: 'Group E', value: 200 },
        { name: 'Group F', value: 200 },
    ];
    return (
        <div>
            <PieChart width={200} height={300}>
                <Pie
                    dataKey="value"
                    isAnimationActive={true}
                    data={data}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    fill="#82ca9d"
                    label
                />
                <Tooltip />
            </PieChart>
        </div>
    )
}

export default GraficoPastel;