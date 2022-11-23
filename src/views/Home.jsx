import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../redux/actions";
import Card from "../components/card/Card";
import FilterContainer from "../components/filter/FilterContainer";

const Home = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <>
      <div>
        <div className="">
          <FilterContainer />
        </div>
        <div className="bg-base-300 p-5 m-8">
          {products.length > 0
            ? products.map((e) => {
                return (
                  <>
                    <Card
                      image={e.image}
                      name={e.name}
                      unitPrice={e.unitPrice}
                      description={e.description}
                    />
                  </>
                );
              })
            : "No Products"}
        </div>
        <div>
          <p>Footer</p>
        </div>
      </div>
    </>
  );
};

export default Home;
