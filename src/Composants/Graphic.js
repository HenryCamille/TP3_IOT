import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


function Graphic (props) {

  const {data} = props;
  const liste = data.map((goat) => ({
    heartRate : goat.heaRtrate, 
    heure : new Date(goat.timestamp).toLocaleTimeString('fr-FR'), 
    }))
    return (
      <ResponsiveContainer width="100%" height={200}>
        <LineChart
          width={500}
          height={300}
          data={liste}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="heure" />
          <YAxis label="BPM"/>
          <Tooltip />
          <Legend />
          <Line dataKey="heartRate" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    );
  }


export default Graphic