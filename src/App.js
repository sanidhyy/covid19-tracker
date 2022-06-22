import React, { Component } from "react";

import { Cards, Charts, CountryPicker } from "./components";
import styles from "./App.module.css";
import { fetchData } from "./api";

// Logo
import Logo from "./images/image.png";

export default class App extends Component {
  // store data and selected country in state
  state = {
    data: {},
    country: "",
  };

  async componentDidMount() {
    const fetchedData = await fetchData();

    this.setState({ data: fetchedData });
  }

  // runs when a country is selected by user
  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);

    this.setState({ data: fetchedData, country: country });
  };

  render() {
    const { data, country } = this.state;

    return (
      <div className={styles.container}>
        {/* Github repository link */}
        <a
          href="https://github.com/Technical-Shubham-tech/covid19-tracker"
          target="_blank"
          rel="noreferrer"
        >
          <img src={Logo} className={styles.image} alt="COVID-19" />
        </a>
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Charts data={data} country={country} />
      </div>
    );
  }
}
