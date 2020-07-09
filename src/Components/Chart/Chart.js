import React , {useState , useEffect} from 'react'
import {fetchDailyData} from "../../api"
import {Line , Bar} from "react-chartjs-2"
import styles from './Chart.module.css'
import {  Typography, Grid, Paper } from '@material-ui/core';

export default function Chart({data : {confirmed , recovered , deaths} , country}) {
    const [dailyData , setDailyData] = useState([])

    useEffect( () => {
        const fetchAPI = async () => {
            setDailyData(await fetchDailyData())
        } 
        fetchAPI();
    } , [] )
    const LineChart = (
        dailyData.length ? (
        <Line
            data={{
                labels:dailyData.map(({date}) => date),
                datasets:[
                    {
                        data : dailyData.map(({confirmed}) => confirmed),
                        label : "Infected",
                        fill : true,
                        borderColor:"yellow",
                        backgroundColor:"yellow"
                    } , 
                    {
                        data : dailyData.map(({deaths}) => deaths),
                        label : "Deaths",
                        fill : true,
                        borderColor:"red",
                        backgroundColor:"red"
                    }
                ],
            }}
        />
        ) : null
    );

    const BarChart = (
        confirmed ? (
            <Bar 
                data={{
                    labels:["Infected" , "Recovered" , "Deaths"],
                    datasets:[{
                        label :"People",
                        backgroundColor: ["red" , "green" , "yellow"],
                        data : [confirmed.value , recovered.value , deaths.value]
                    }]
                }}
                options={{
                    legend:{display:false},
                    title:{display:true , text:`Current state in ${country}`},
                }}
            />
        ) :null
    )

    return (
        <div >
            <Grid item xs={12} md={12} lg={12} xl={12} className={styles.container}>
                {country ? BarChart : LineChart}
            </Grid>
        </div>
    )
}

