import React , {useState , useEffect} from 'react'
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import {fetchCountryData} from '../../api'
import styles from './Country.module.css'

export default function CountryPicker( {handleCountryChange}) {

    const [ fetchedCountries , setFetchCountries] = useState([])

    useEffect(()=>{
        const fetchCountries = async () => {
            setFetchCountries(await fetchCountryData() )
        }
        fetchCountries()
    } , [setFetchCountries])


    return (
        <div className={styles.container}>
            <FormControl className={styles.dropdown}>
                <InputLabel className={styles.label} id="demo-simple-select-label">Select Country</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    defaultValue=""
                    onChange = { (e)=>handleCountryChange(e.target.value)} 
                >
                    {fetchedCountries.map((country , i) => <MenuItem key={i} value={country}>{country}</MenuItem>)}
                </Select>
            </FormControl>
        </div>
    )
}
