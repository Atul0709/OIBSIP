import React, { useState } from "react";
import { addPizza } from "../../actions/pizzaAction";
import { useDispatch, useSelector } from "react-redux";
import Loader from "./../Loader";
import Error from "./../Error";
import Success from "./../Success";

const AddNewPizza = () => {
  const [name, setname] = useState("");
  const [smallPrice, setsmallPrice] = useState("");
  const [largprice, setlargprice] = useState("");
  const [mediumPrice, setmediumPrice] = useState("");
  const [image, setimage] = useState("");
  const [description, setdescription] = useState("");
  const [category, setcategory] = useState("");

  const addPizzaState = useSelector((state) => state.addPizzaReducer);
  const { loading, error, success } = addPizzaState;

  const dispatch = useDispatch();

  const submitForm = (e) => {
    e.preventDefault();
    const pizza = {
      name,
      image,
      description,
      category,
      prices: {
        small: smallPrice,
        medium: mediumPrice,
        larg: largprice,
      },
    };
    dispatch(addPizza(pizza));
  };

  return (
    <div className="container mx-auto p-4">
      {loading && <Loader />}
      {error && <Error error="add new pizza error" />}
      {success && <Success success="Pizza Added Successfully" />}
      <form onSubmit={submitForm} className="bg-gray-100 p-4 rounded-lg shadow-lg">
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setname(e.target.value)}
            placeholder="Enter Name"
            className="border rounded py-2 px-3 w-full"
          />
        </div>
        <div className="mb-4 grid grid-cols-3 gap-4">
          <div>
            <label className="block text-gray-700 font-bold mb-2">Small Price</label>
            <input
              type="text"
              value={smallPrice}
              onChange={(e) => setsmallPrice(e.target.value)}
              placeholder="Enter Small Price"
              className="border rounded py-2 px-3 w-full"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-bold mb-2">Medium Price</label>
            <input
              type="text"
              value={mediumPrice}
              onChange={(e) => setmediumPrice(e.target.value)}
              placeholder="Enter Medium Price"
              className="border rounded py-2 px-3 w-full"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-bold mb-2">Large Price</label>
            <input
              type="text"
              value={largprice}
              onChange={(e) => setlargprice(e.target.value)}
              placeholder="Enter Large Price"
              className="border rounded py-2 px-3 w-full"
            />
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Image</label>
          <input
            type="text"
            value={image}
            onChange={(e) => setimage(e.target.value)}
            placeholder="Add Image URL"
            className="border rounded py-2 px-3 w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Description</label>
          <input
            type="text"
            value={description}
            onChange={(e) => setdescription(e.target.value)}
            placeholder="Enter Description"
            className="border rounded py-2 px-3 w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Category</label>
          <input
            type="text"
            value={category}
            onChange={(e) => setcategory(e.target.value)}
            placeholder="Enter Category"
            className="border rounded py-2 px-3 w-full"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Add New
        </button>
      </form>
    </div>
  );
};

export default AddNewPizza;
