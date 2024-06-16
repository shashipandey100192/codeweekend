import React from 'react'
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
} from "recharts";
import Myrightgraph from './Myrightgraph.tsx';

const data = [
    {
        name: "Page A",
        uv: 4000,
        pv: 2400,
        amt: 2400,
    },
    {
        name: "Page B",
        uv: 3000,
        pv: 1398,
        amt: 2210,
    },
    {
        name: "Page C",
        uv: 2000,
        pv: 9800,
        amt: 2290,
    },
    {
        name: "Page D",
        uv: 2780,
        pv: 3908,
        amt: 2000,
    },
    {
        name: "Page E",
        uv: 1890,
        pv: 4800,
        amt: 2181,
    },
    {
        name: "Page F",
        uv: 2390,
        pv: 3800,
        amt: 2500,
    },
    {
        name: "Page G",
        uv: 3490,
        pv: 4300,
        amt: 2100,
    },
];


function Mygraph() {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-sm-8'>
                    <div className='border m-2 bg-dark'>

                        <BarChart
                            width={700}
                            height={400}
                            data={data}
                        >
                            {/* <CartesianGrid strokeDasharray="3 3" /> */}
                            <XAxis dataKey="name" />
                            {/* <YAxis /> */}
                            <Tooltip shared={false} trigger="mouseover" />
                            <Legend />
                            <Bar dataKey="pv" fill="blue" />
                            <Bar dataKey="uv" fill="green" />
                            <Bar dataKey="amt" fill="red" />
                        </BarChart>

                    </div>
                </div>
                <div className='col-sm-4'>
                    <div className='border m-2 bg-dark'>
                       <Myrightgraph/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Mygraph