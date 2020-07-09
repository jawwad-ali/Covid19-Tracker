import axios from 'axios'

const url = "https://covid19.mathdro.id/api"

// Global Data api
export const fetchData = async (country) => {

    // url to get the particular country data
    let changeableUrl = url
    if(country){
        changeableUrl = `${url}/countries/${country}`
    }

    try{
        // destructuring the data that we want to get 
        const {data :{confirmed , recovered , deaths} } = await axios.get(changeableUrl)

        return {confirmed , recovered , deaths } 

    }
    catch(error){
        return  error
    }
}

// daily data api
export const fetchDailyData = async () => {
    try{
        const {data} = await axios.get(`${url}/daily`)

        const modifiedData = data.map((dailyData)=>({
            confirmed: dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            date: dailyData.reportDate,
        }))
        return modifiedData
    }
    catch(error){
        return error    
    }
}

// fetch Country Data
export const fetchCountryData = async () => {
    try{
        const {data : {countries} } = await axios.get(`${url}/countries`)
        return countries.map( (country => country.name ))

    }
    catch(error){
        return error 
    }
}