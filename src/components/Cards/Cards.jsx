import React from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import CountUp from "react-countup";
import dateFormat from "dateformat";
import cx from "classnames";

// CSS Styles
import styles from "./Cards.module.css";

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  if (!confirmed) {
    return "Loading...";
  }

  // Card List - Infected, recovered and deaths
  const cardList = [
    {
      title: "Infected",
      value: confirmed?.value,
      description: "Number of infected cases of COVID-19",
      style: styles.infected,
    },
    {
      title: "Recovered",
      value: recovered?.value,
      description: "Number of recovered cases of COVID-19",
      style: styles.recovered,
    },
    {
      title: "Deaths",
      value: deaths?.value,
      description: "Number of deaths caused by COVID-19",
      style: styles.deaths,
    },
  ];

  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        {/* mapping through all three cards - Infected, recovered, deaths */}
        {cardList.map((card) => (
          <Grid
            item
            component={Card}
            xs={12}
            md={3}
            className={cx(styles.card, card.style)}
          >
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                {card.title}
              </Typography>
              <Typography variant="h5">
                <CountUp
                  start={0}
                  end={card.value}
                  duration={2.5}
                  separator=","
                />
              </Typography>
              <Typography color="textSecondary">
                {/* Time will remain same for all cards */}
                {dateFormat(new Date(lastUpdate), "d mmmm, yyyy hh:MM TT")}
              </Typography>
              <Typography variant="body2">{card.description}</Typography>
            </CardContent>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Cards;
