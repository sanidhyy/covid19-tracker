import React, { useState, useEffect } from "react";
import { NativeSelect, FormControl } from "@material-ui/core";
import { fetchCountries } from "../../api";

// CSS Styles
import styles from "./CountryPicker.module.css";

// Fetch Data from API
const CountryPicker = ({ handleCountryChange }) => {
  const [fetchedCountries, setFetchedCountries] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setFetchedCountries(await fetchCountries());
    };

    fetchAPI();
  }, []);

  return (
    <FormControl className={styles.formControl}>
      <NativeSelect
        defaultValue=""
        onChange={(e) => handleCountryChange(e.target.value)}
      >
        {/* Global By default */}
        <option value="">Global</option>
        {/* All countries */}
        {fetchedCountries.map((country, i) => (
          <option key={i} value={country}>
            {country}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  );
};

export default CountryPicker;
