import React, { Fragment, useEffect, useState } from "react";
import { Card, Row } from "react-bootstrap";
import ProductService from "../services/Products";

import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../redux/feature/counter.feature";

const Products = (props) => {
  // props
  const { getCartItem } = props;

  // state
  let [state, setState] = useState([]);

  // get data from redux
  const counter = useSelector((state) => {
    return state["counter"];
  });

  // redux state
  let { cartItems } = counter;

  // redux dispatch
  let dispatch = useDispatch();

  useEffect(() => {
    // get product list
    const productList = ProductService.getProductList();
    setState(productList);
    getCartItem(cartItems);
  }, [cartItems]);

  // increament fun the item in cart
  let Numincr = (data) => {
    dispatch(increment(data));
  };

  // decrement fun the item in cart
  let Numdecre = (data) => {
    dispatch(decrement(data));
  };

  return (
    <Fragment>
      <Row className="text-center mt-2">
        <h2>Products MF</h2>
      </Row>
      <Row className="p-5 justify-content-center shadow ">
        {state.map((product) => {
          return (
            <Card
              key={product.id}
              className="shadow "
              style={{ width: "15rem", height: "20rem", margin: "15px" }}
            >
              <Card.Img
                className="p-4"
                variant="top"
                src={product.image}
                width="10px"
                height="200px"
              />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>
                  {"Add to Cart:  "}
                  <i
                    className="bi bi-dash-square-fill m-1"
                    onClick={() => Numdecre(product)}
                  />

                  <span>
                    {cartItems && cartItems.length == 0 ? (
                      <span>{0}</span>
                    ) : (
                      cartItems &&
                      cartItems.map((item) => {
                        if (item.id == product.id) {
                          return (
                            <span key={item.id}>{item.qty ? item.qty : 0}</span>
                          );
                        }
                      })
                    )}
                  </span>
                  <i
                    className="bi bi-plus-square-fill m-1"
                    onClick={() => Numincr(product)}
                  />
                </Card.Text>
              </Card.Body>
            </Card>
          );
        })}
      </Row>
    </Fragment>
  );
};

export default Products;
