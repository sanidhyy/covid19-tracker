import axios from "axios";

// stores url from which data is fetched
const url = "https://covid19.mathdro.id/api";

// fetching data whenever function is called
export const fetchData = async (country) => {
  let changeableUrl = url;

  if (country) {
    changeableUrl = `${url}/countries/${country}`;
  }

  try {
    // Get Data using Axios
    const {
      data: { confirmed, recovered, deaths, lastUpdate },
    } = await axios.get(changeableUrl);

    return { confirmed, recovered, deaths, lastUpdate };
  } catch (error) {
    // Error
    console.log(error);
  }
};

export const fetchDailyData = async () => {
  try {
    // Get Data using Axios
    const { data } = await axios.get(`${url}/daily`);

    // Modify data that is needed
    const modifiedData = data.map((dailydata) => ({
      confirmed: dailydata.confirmed.total,
      deaths: dailydata.deaths.total,
      date: dailydata.reportDate,
    }));

    return modifiedData;
  } catch (error) {
    // Error
    console.log(error);
  }
};

export const fetchCountries = async () => {
  try {
    // Get Data using Axios
    const {
      data: { countries },
    } = await axios.get(`${url}/countries`);

    // Return each country
    return countries.map((country) => country.name);
  } catch (error) {
    // Error
    console.log(error);
  }
};
