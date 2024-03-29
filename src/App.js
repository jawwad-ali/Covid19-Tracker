import React from 'react'
import { fetchData } from './api'
import AppBar from '@material-ui/core/AppBar';
import { Global, Chart, CountryPicker } from './Components'
import styles from './App.module.css'

export default class App extends React.Component {

    state = {
        data: {},
        country: "",
    }

    async componentDidMount() {
        const fetchedData = await fetchData()
        this.setState({ data: fetchedData });
    }

    // country picker
    handleCountryChange = async (country) => {
        const fetchedData = await fetchData(country)
        this.setState({ data: fetchedData, country: country });
    }

    render() {
        const { data, country } = this.state
        return (
            <div className={styles.container}>
                <AppBar position="static" className={styles.main}>
                    <h1 className={styles.title}>Covid Tracker</h1>
                </AppBar>

                {/* Components  */}
                <Global data={data} />
                <CountryPicker handleCountryChange={this.handleCountryChange} />
                <Chart data={data} country={country} />
            </div>
        )
    }
}
