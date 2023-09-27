import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
// import { Container, Row, Col } from "react-bootstrap";
import { getAllPizzas } from "../actions/pizzaAction";
import Pizza from "../components/Pizza";
import Loader from "../components/Loader";
import Error from "../components/Error";
import Filters from "../components/Filters";

const HomeScreen = () => {
  const dispatch = useDispatch();
  const pizzastate = useSelector((state) => state.getAllPizzaReducer);
  const { loading, pizzas, error } = pizzastate;
  // console.log(pizzas);
  useEffect(() => {
    dispatch(getAllPizzas());
  }, [dispatch]);

  return (
    <>
      <div>
        {loading ? (
          <Loader/>
        ) : error ? (
          <Error>Error while fetching pizzas {error}</Error>
        ) : (
          <div className="grid md:grid-cols-4 grid-cols-1">
            
            {pizzas.map((pizza) => (
              <div key={pizza.id}>
                <Pizza pizza={pizza} />
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default HomeScreen;
