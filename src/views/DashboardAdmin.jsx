import React, { useState } from "react";
import { Tab, TabList, Card, Block } from "@tremor/react";
import CreateProduct from "../components/dashboard/CreateProduct";
import ProductTable from "../components/dashboard/ProductTable";
import UsersTable from "../components/dashboard/UsersTable";
import CardG from "../components/dashboard/CardG";
import ChartDonut from "../components/dashboard/ChartDonut";
import UsersBanerTable from "../components/dashboard/UsersBanerTable";
import ProductBanerTable from "../components/dashboard/ProductBanerTable";

const DashboardAdmin = () => {
  const [view, setView] = useState(1);

  return (
    <>
      <main className="bg-white p-6 sm:p-10">
        <h1 className="text-white text-2xl">Dashboard</h1>
        <p className="text-white">Bienvenido Alexander</p>
        <TabList
          handleSelect={(value) => setView(value)}
          defaultValue={1}
          marginTop="mt-6"
        >
          <Tab value={1} text="Metricas" />
          <Tab value={2} text="Productos" />
          <Tab value={3} text="Usuarios" />
          <Tab value={4} text="Productos Baneados" />
          <Tab value={5} text="Usuarios Baneados" />
          <Tab value={6} text="Crear Producto" />
        </TabList>

        {view === 1 ? (
          <>
            <div className="bg-stone-300 p-2 mt-6">
              <CardG />
              <Block>
                <ChartDonut />
              </Block>
            </div>
          </>
        ) : (
          ""
        )}
        {view === 2 ? (
          <div className="mt-6">
            <ProductTable />
          </div>
        ) : (
          ""
        )}
        {view === 3 ? (
          <div className="mt-6">
            <UsersTable />
          </div>
        ) : null}
        {view === 4 ? (
          <div className="mt-6">
            <ProductBanerTable />
          </div>
        ) : (
          ""
        )}
        {view === 5 ? (
          <div className="mt-6">
            <UsersBanerTable />
          </div>
        ) : (
          ""
        )}
        {view === 6 ? (
          <Card marginTop="mt-6">
            <div className="h-full bg-stone-300 p-2">
              <CreateProduct />
            </div>
          </Card>
        ) : (
          ""
        )}
      </main>
    </>
  );
};

export default DashboardAdmin;
