import React from 'react'
import { ResponsiveContainer, LineChart, Line,XAxis,YAxis, CartesianGrid, Legend,Tooltip} from 'recharts';

const programingData=[
    {
        name:"Python",
        student:15,
        Marks:30

    },

    {
        name:"Javascript",
        student:16,
        Marks:20

    },
    {
        name:"React",
        student:10,
        Marks:50

    },
    {
        name:"NodeJs",
        student:5,
        Marks:40

    },

    {
        name:"Html",
        student:20,
        Marks:60

    },
    {
        name:"Css",
        student:8,
        Marks:90

    },
    {
        name:"C",
        student:20,
        Marks:10

    },
    {
        name:"c++",
        student:25,
        Marks:70

    },
    {
        name:"Java",
        student:50,
        Marks:60

    },


]

function LineBar() {
    return ( 
        <div>
            <ResponsiveContainer width="100%" height="100%" aspect={3}>
<LineChart data={programingData} width={700} height={320} margin={{top:5, right:10,left:5,bottom:5}}>
    <CartesianGrid strokeDasharray="3 3"/>
<XAxis dataKey="name" interval={'preserveStartEnd'} />
<YAxis  />
<Tooltip />
<Legend/>
<Line type="monotone" dataKey="student" stroke='red' />
<Line type="" dataKey="Marks" stroke='green' />

</LineChart>
            </ResponsiveContainer>
        </div>
    )
}

export default LineBar
