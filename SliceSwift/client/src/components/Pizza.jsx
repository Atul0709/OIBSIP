'use client';
import React, { useState } from 'react';
import { Button, Modal, Tooltip } from 'flowbite-react';

import { Card } from 'flowbite-react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../actions/cartAction';
// import Pizzas from '../pizzalist';

const Pizza = ({ pizza }) => {

    const [varient, setVarient] = useState('Regular');
    const [base, setBase] = useState('Cheese Burst');
    const [sauce, setSauce] = useState('Marinara');
    const [cheese, setCheese] = useState('Mozzarella');
    const [quantity, setQuantity] = useState(1);


    const dispatch = useDispatch();
    const addToCartHandler = () => {

        dispatch(addToCart(pizza, quantity, varient, base, sauce, cheese));
    };


    const [openModal, setOpenModal] = useState(() => 'string');
    const props = { openModal, setOpenModal };

    return (
        <>

            <div className="antialiased bg-gray-200 text-gray-900 font-sans p-4 ">
                <div className="container mx-auto  ">

                    <div className="flex flex-wrap mx-1 justify-center p-0">
                        <div className="p-0">


                            <Card>


                                <img
                                    src={pizza.image}
                                    alt={pizza.name}
                                    onClick={() => props.setOpenModal('dismissible')}
                                    style={{ cursor: 'pointer' }}
                                />
                                <Button className="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm  text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 mr-2 mb-2"
                                    onClick={() => props.setOpenModal('dismissible')}> CUSTOMIZE</Button>
                                <Modal dismissible show={props.openModal === 'dismissible'} onClose={() => props.setOpenModal(undefined)}>
                                    <Modal.Header className="text-center font-bold">CUSTOMIZE OPTIONS</Modal.Header>
                                    <Modal.Body>
                                        <div className="space-y-1">


                                            {/* Variant */}
                                            <div className="font-semibold ">
                                                <h5 className="font-semibold">Variants</h5>
                                                <div className="rounded-md">
                                                    {pizza.varients.map((variant, index) => (
                                                        <div className="flex items-center p-1" key={variant}>
                                                            <input
                                                                id={`variant-radio-${index}`}
                                                                type="radio"
                                                                value={variant}
                                                                checked={variant === varient}
                                                                onChange={(e) => setVarient(e.target.value)}
                                                            />
                                                            <label
                                                                htmlFor={`variant-radio-${index}`}
                                                                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                                            >
                                                                {variant} - ₹{pizza.prices[0][variant]}
                                                            </label>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* Base */}
                                            <div className="font-semibold ">
                                                <h5 className="font-semibold">Pizza Base</h5>
                                                <div className="rounded-md">
                                                    {pizza.pizzaBase.map((pizzaBaseOption, index) => ( // Use a different variable name here
                                                        <div className="flex items-center p-1" key={pizzaBaseOption}>
                                                            <input
                                                                id={`base-radio-${index}`}
                                                                type="radio"
                                                                value={pizzaBaseOption}
                                                                checked={pizzaBaseOption === base} // Use the correct state variable
                                                                onChange={(e) => setBase(e.target.value)}

                                                            />
                                                            <label
                                                                htmlFor={`base-radio-${index}`}
                                                                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                                            >
                                                                {pizzaBaseOption} - ₹{pizza.basePrice[0][pizzaBaseOption]}
                                                            </label>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* Sauces */}
                                            <div className="font-semibold ">
                                                <h5 className="font-semibold">Sauces Options</h5>
                                                <div className="rounded-md">
                                                    {pizza.sauce.map((pizzaSauceOption, index) => ( // Use a different variable name here
                                                        <div className="flex items-center p-1" key={pizzaSauceOption}>
                                                            <input
                                                                id={`sauce-radio-${index}`}
                                                                type="radio"
                                                                value={pizzaSauceOption}
                                                                checked={pizzaSauceOption === sauce} // Use the correct state variable
                                                                onChange={(e) => setSauce(e.target.value)}

                                                            />
                                                            <label
                                                                htmlFor={`sauce-radio-${index}`}
                                                                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                                            >
                                                                {pizzaSauceOption} - ₹{pizza.saucesPrice[0][pizzaSauceOption]}
                                                            </label>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>


                                            {/* Cheese */}
                                            <div className="font-semibold">
                                                <h5 className="font-semibold">Cheese Options</h5>
                                                <div className="rounded-md">
                                                    {pizza.cheese.map((pizzacheeseOption, index) => (
                                                        <div className="flex items-center p-1" key={pizzacheeseOption}>
                                                            <input
                                                                id={`cheese-radio-${index}`}
                                                                type="radio"
                                                                value={pizzacheeseOption}
                                                                checked={pizzacheeseOption === cheese}
                                                                onChange={(e) => setCheese(e.target.value)}
                                                            />
                                                            <label
                                                                htmlFor={`cheese-radio-${index}`}
                                                                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                                            >
                                                                {pizzacheeseOption} {pizza.cheesePrice && pizza.cheesePrice[0] && pizza.cheesePrice[0][pizzacheeseOption]}
                                                            </label>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>








                                        </div>
                                    </Modal.Body>
                                    <Modal.Footer>
                                        <Button onClick={() => props.setOpenModal(addToCartHandler)}>Add To Cart</Button>

                                    </Modal.Footer>
                                </Modal>

                                <h5 className="text-l font-bold tracking-tight text-gray-900 dark:text-white grid grid-cols-3 gap-4">
                                    <p className='col-start-1 col-end-3'>
                                        {pizza.name}

                                    </p>

                                    <h5 className='text-center'>Qty
                                        <h6 className='rounded-md text-center' value={quantity} onChange={(e) => setQuantity(e.target.value)}>
                                       1

                                        </h6>
                                    </h5>
                                </h5>



                                <div className="flex items-center justify-between">
                                    <span className="text-xl font-bold text-gray-900 dark:text-white">
                                        ₹{pizza.prices[0][varient] * quantity + pizza.basePrice[0][base] + pizza.saucesPrice[0][sauce]}
                                    </span>
                                    <button onClick={addToCartHandler}
                                        className="rounded-lg bg-cyan-700 px-3 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800">
                                        <p>

                                            Add to cart
                                        </p>
                                    </button>
                                </div>
                            </Card>

                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}

export default Pizza