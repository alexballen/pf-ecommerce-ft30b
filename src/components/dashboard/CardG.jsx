import {
  BadgeDelta,
  Block,
  Card,
  ColGrid,
  Flex,
  Metric,
  ProgressBar,
  Text,
} from "@tremor/react";
import React from "react";
import ChartDonut from "./ChartDonut";

const data = [
  {
    title: "Ventas",
    metric: "$ 12,699",
    progress: 15.9,
    target: "$ 80,000",
    delta: "13.2%",
    deltaType: "moderateIncrease",
  },
  {
    title: "Ganancias",
    metric: "$ 45,594",
    progress: 36.5,
    target: "$ 180,000",
    delta: "33.2%",
    deltaType: "increase",
  },
  {
    title: "Clientes",
    metric: "$ 1,699",
    progress: 50.2,
    target: "$ 9,000",
    delta: "11.6%",
    deltaType: "moderateDecrease",
  },
];

const CardG = () => {
  return (
    <ColGrid
      numColsMd={2}
      numColsLg={3}
      marginTop="mt-6"
      gapX="gap-x-6"
      gapY="gap-y-6"
      decorationColor="green"
    >
      {data.map((e) => (
        <Card key={e.title}>
          {/* <div className="bg-stone-300"> */}
          <Flex alignItems="items-start">
            <Block>
              <Text>{e.title}</Text>
              <Metric>{e.metric}</Metric>
            </Block>
            <BadgeDelta text={e.delta} />
          </Flex>
          <Flex marginTop="mt-4" spaceX="space-x-2">
            <Text>{`${e.progress}% (${e.metric})`}</Text>
            <Text>{e.target}</Text>
          </Flex>
          <ProgressBar percentageValue={e.progress} marginTop="mt-3" />
          {/* </div> */}
        </Card>
      ))}
    </ColGrid>
  );
};

export default CardG;
