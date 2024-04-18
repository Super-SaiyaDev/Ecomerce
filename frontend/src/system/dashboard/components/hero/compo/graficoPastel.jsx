import React from 'react'
import { PieChart, Pie, Tooltip, Cell} from 'recharts';

const GraficoPastel = () => {
    const data = [
        { name: 'Group A', value: 400 },
        { name: 'Group B', value: 300 },
        // más datos aquí
    ];
    return (
        <div>
            <PieChart width={500} height={400}>
                <Pie
                    dataKey="value"
                    isAnimationActive={false}
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

export default GraficoPastel