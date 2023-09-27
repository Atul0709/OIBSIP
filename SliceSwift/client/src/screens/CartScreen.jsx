import React from "react";
// import { Container, Row, Col } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
// import { FaMinusCircle, FaPlusCircle, FaTrash } from "react-icons/fa";
import { addToCart, deleteFromCart } from "../actions/cartAction";
import Checkout from "../components/Checkout";
const CartScreen = () => {
  const cartState = useSelector((state) => state.cartReducer);
  const cartItems = cartState.cartItems;
  const dispatch = useDispatch();
  const subTotal = cartItems.reduce((x, item) => x + item.price, 0);
  return (
    <>
      <div className="bg-gray-100 min-h-screen">
        <div className="container mx-auto p-4 md:p-8">
          <h1 className="text-2xl font-semibold mb-4">My Cart</h1>
          <div className="flex flex-col md:flex-row justify-between">

            {/* Cart Items */}
            <div className="w-full md:w-2/3">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4">
                {cartItems.map((item) => (
                  <div key={item.id} className="mb-4">
                    {/* Pizza Item */}
                    <div className="flex bg-white rounded-lg flex-col md:flex-row">
                      {/* Pizza Image */}
                      <div className="md:w-1/3 mb-4 md:mb-0">
                        <img src={item.image} alt="Pizza" />
                      </div>
                      <div className="w-full md:w-2/3 p-4">
                        <div>
                          {/* Pizza Name */}
                          <h2 className="text-lg font-semibold">{item.name}</h2>
                          {/* Variant */}
                          <p className="text-gray-600">{item.varient}</p>
                          {/* Base */}
                          <p className="text-gray-600">{item.base}</p>
                          {/* Sauce */}
                          <p className="text-gray-600">{item.sauce}</p>
                          {/* Cheese */}
                          <p className="text-gray-600">{item.cheese}</p>
                        </div>
                        <div className="mt-2">
                          <div className="flex items-center">
                            {/* Quantity */}
                            <h6 className="font-bold">
                              REMOVE ITEM
                            </h6>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 fill-red-500 stroke-transparent mx-3"
                              onClick={() => {
                                dispatch(deleteFromCart(item));
                              }}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                            </svg>

                          </div>
                          {/* Price */}
                          <p className="font-bold mt-2 text-2xl">₹{item.price}</p>





                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Order Summary */}
            <div className="w-full md:w-1/4">
              <div className="bg-white p-4 rounded-lg mb-4">
                <h2 className="text-lg font-semibold mb-2">Order Summary</h2>
                <div className="flex justify-between mb-2">
                  <span>Subtotal </span> {cartState.cartItems.length}
                  <span className="font-semibold">₹{subTotal}</span>
                </div>
                <div className="mb-2">
                  {/* Shipping */}
                  <label className="text-gray-600">Shipping</label>
                  <select className="block w-full p-2 mt-1 border rounded-md">
                    <option>Standard Shipping - Free</option>
                    <option>Express Shipping - Free</option>
                  </select>
                </div>
                <div className="mb-2">
                  {/* Promo Code */}
                  <label htmlFor="promo" className="text-gray-600">Promo Code</label>
                  <div className="flex">
                    <input
                      type="text"
                      id="promo"
                      placeholder="Enter promo code"
                      className="w-full p-2 border rounded-md"
                    />
                    <button className="bg-indigo-500 text-white px-4 py-2 ml-2 rounded-md">Apply</button>
                  </div>
                </div>
                <div className="flex justify-between mt-4">
                  {/* Total Cost */}
                  <span className="font-semibold">Total Cost</span>
                  <span className="font-semibold">₹{subTotal}</span>
                </div>

                <Checkout subTotal={subTotal} />

              </div>
            </div>
          </div>
        </div>
      </div>











      {/* <Container>
        <Row>
          <Col md={6}>
            <h1>My Cart</h1>
            <Row>
              {cartItems.map((item) => (
                <>
                  <Col md={7}>
                    <h5>
                      {item.name} [{item.varient}]
                    </h5>
                    <h6>
                      {" "}
                      Price : {item.quantity} X {item.prices[0][item.varient]} ={" "}
                      {item.price}
                    </h6>

                    <h6>
                      Quantity :&nbsp;
                      <FaMinusCircle
                        className="text-danger"
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                          dispatch(
                            addToCart(item, item.quantity - 1, item.varient)
                          );
                        }}
                      />{" "}
                      &nbsp;
                      {item.quantity} &nbsp;
                      <FaPlusCircle
                        className="text-success"
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                          dispatch(
                            addToCart(item, item.quantity + 1, item.varient)
                          );
                        }}
                      />
                    </h6>
                  </Col>
                  <Col md={5}>
                    <img
                      alt={item.name}
                      src={item.image}
                      style={{ width: "80px", height: "80px" }}
                    />
                    <FaTrash
                      className="text-danger"
                      style={{ cursor: "pointer", marginLeft: "20px" }}
                      onClick={() => {
                        dispatch(deleteFromCart(item));
                      }}
                    />
                  </Col>
                  <hr />
                </>
              ))}
            </Row>
          </Col>
          <Col md={4}>
            <h1>Payment Info</h1>
            <h4>Sub Total </h4>
            <h4>RS : {subTotal} /-</h4>
            <Checkout subTotal={subTotal} />
          </Col>
        </Row>
      </Container> */}
    </>
  );
};

export default CartScreen;
