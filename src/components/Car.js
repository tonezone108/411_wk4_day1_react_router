import React from "react";
import cars from "../cars.json";
import { Container, Paper, Chip } from "@material-ui/core";

// import material ui components here //
// Container, Paper, Chip //

const Car = props => {
  let id = props.match.params.id;
  let car = cars.find(car => id == car.id);
  return (
    <Container maxWidth="sm" className="car-container">
      <Paper className="car-paper">
        <h1>{car.Name}</h1>
        {Object.keys(car).map((key, idx) => {
          return <Chip label={`${key}: ${car[key]}`}></Chip>;
        })}
      </Paper>
    </Container>
  );
};

export default Car;
