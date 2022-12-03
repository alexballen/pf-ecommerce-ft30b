import { Card, DonutChart, Title } from "@tremor/react";
import React from "react";

const cities = [
  {
    name: "New York",
    Sales: 9800,
  },
  {
    name: "London",
    Sales: 5849,
  },
  {
    name: "Hong Kong",
    Sales: 3650,
  },
  {
    name: "San Francisco",
    Sales: 2800,
  },
  {
    name: "Singapore",
    Sales: 3820,
  },
  {
    name: "Zurich",
    Sales: 6811,
  },
];

const ChartDonut = () => {
  return (
    <Card marginTop="mt-6">
      <Title>Ventas por Ciudad</Title>
      <DonutChart
        data={cities}
        category="Sales"
        dataKey="name"
        marginTop="mt-6"
        colors={["red", "blue", "lime", "orange", "fuchsia", "yellow"]}
      />
    </Card>
  );
};

export default ChartDonut;
