import React from 'react'
import {  Typography, Grid, Paper } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CancelIcon from '@material-ui/icons/Cancel';
import styles from './Global.module.css'
import CountUp from 'react-countup';

export default function Global({ data: { confirmed, recovered, deaths, lastUpdate } }){

    if(!confirmed){
        return <div>Working on it...</div>
    }

    return (
        <div className={styles.main}>
             <Container maxWidth="md">
                <Grid container spacing={3}>
                    <Grid item xs={12} md={12} lg={4} className={styles.datadiv}>
                        <LocalHospitalIcon className={styles.icon} />
                        <CountUp start={0 } className={styles.figure} end={confirmed.value} duration={2} separator="," />
                        <Typography className={styles.text}>Total Confirmed</Typography>
                    </Grid>
                    <Grid item xs={12} md={12} lg={4} className={styles.datadiv}>
                        <CheckCircleIcon className={styles.icon}/>
                        <CountUp start={0 } className={styles.figure} end={recovered.value} duration={2} separator="," />
                        <Typography className={styles.text}>Total Recovered</Typography>

                    </Grid>
                    <Grid item xs={12} md={12} lg={4} className={styles.datadiv}>
                        <CancelIcon className={styles.icon_death}/>
                        <CountUp start={0 } className={styles.figure} end={deaths.value} duration={2} separator="," />
                        <Typography className={styles.text}>Total Deaths</Typography>

                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}
