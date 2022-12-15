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
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getdataadmin } from "../../redux/actions/index";

const CardG = () => {
  const dispatch = useDispatch();

  const ventaBruta = 129194;

  useEffect(() => {
    dispatch(getdataadmin());
  }, [dispatch]);

  const ventaBrutas = 129194;
  const metaMensual = 1000000;
  const ptajeCumplimiento = (ventaBrutas * 100) / metaMensual;
  const ptajeACumplir = 100 - ptajeCumplimiento;
  /* 19% impuesto
  10% gastos
  30% ganancianeta
  total 59% */
  const gananciaNeta = (ventaBrutas * 59) / 100;
  const objGananciaMm = (metaMensual * 59) / 100;
  const ptajeCumplimientoNeto = (gananciaNeta * 100) / objGananciaMm;
  const ptajeACumplirNeto = 100 - ptajeCumplimientoNeto;

  const data = [
    {
      title: "Venta bruta",
      metric: `$ ${ventaBruta}`,
      progress: `${ptajeCumplimiento}`,
      target: `$${metaMensual} M/m`,
      delta: `${ptajeACumplir} %/c`,
      deltaType: "aumentoModerado",
    },
    {
      title: "Ganancia Neta",
      metric: `${gananciaNeta}`,
      progress: `${ptajeCumplimientoNeto}`,
      target: `${objGananciaMm} O/gnm`,
      delta: `${ptajeACumplirNeto}%/c`,
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
            <div className="bg-green-200 rounded">
              <Text>{`${e.progress}% (${e.metric})`}</Text>
            </div>
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
