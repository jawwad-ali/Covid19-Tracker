import React from 'react'
import { Typography, Grid } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import styles from './Global.module.css'
import CountUp from 'react-countup';

export default function Global({ data: { confirmed, recovered, deaths } }) {

    if (!confirmed) {
        return <div>Working on it...</div>
    }

    return (
        <div className={styles.main}>
            <Container maxWidth="lg">
                <Grid container spacing={3} className={styles.globalContainer}>
                    <Grid item xs={12} md={12} lg={3} className={styles.datadiv}>
                        <Typography className={styles.text}>Total Confirmed</Typography>
                        <CountUp start={0} className={styles.figure} end={confirmed.value} duration={2} separator="," />
                    </Grid>

                    <Grid item xs={12} md={12} lg={3} className={styles.datadiv} style={{ backgroundColor: " rgb(0, 210, 50)" }}>
                        <Typography className={styles.text}>Total Recovered</Typography>
                        <CountUp start={0} className={styles.figure} end={recovered.value} duration={2} separator="," />

                    </Grid>

                    <Grid item xs={12} md={12} lg={3} className={styles.datadiv} style={{ backgroundColor: " rgb(242, 56, 71)" }}>
                        <Typography className={styles.text}>Total Deaths</Typography>
                        <CountUp start={0} className={styles.figure} end={deaths.value} duration={2} separator="," />
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}
