import React, { useState, useEffect } from 'react'
import { fetchDailyData } from "../../api"
import { Line, Bar } from "react-chartjs-2"
import styles from './Chart.module.css'
import { Grid } from '@material-ui/core';
import Container from '@material-ui/core/Container';

export default function Chart({ data: { confirmed, recovered, deaths }, country }) {
    const [dailyData, setDailyData] = useState([])

    useEffect(() => {
        const fetchAPI = async () => {
            setDailyData(await fetchDailyData())
        }
        fetchAPI();
    }, [])

    const LineChart = (
        dailyData.length ? (
            <Line
                data={{
                    labels: dailyData.map(({ date }) => date),
                    datasets: [
                        {
                            data: dailyData.map(({ confirmed }) => confirmed),
                            label: "Infected",
                            fill: true,
                            borderColor: "yellow",
                            backgroundColor: "yellow"
                        },
                        {
                            data: dailyData.map(({ deaths }) => deaths),
                            label: "Deaths",
                            fill: true,
                            borderColor: "red",
                            backgroundColor: "red"
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
                    labels: ["Infected", "Recovered", "Deaths"],
                    datasets: [{
                        label: "People",
                        backgroundColor: ["red", "green", "yellow"],
                        data: [confirmed.value, recovered.value, deaths.value]
                    }]
                }}
                options={{
                    legend: { display: false },
                    title: { display: true, text: `Current state in ${country}` },
                }}
            />
        ) : null
    )

    return (
        <div >
            <Container maxWidth="lg">
                <Grid item xs={12} md={10} lg={10} xl={10} className={styles.container}>
                    {country ? BarChart : LineChart}
                </Grid>
            </Container>
        </div>
    )
}

