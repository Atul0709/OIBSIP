const express = require("express");
const router = express.Router();
const { v4: uuidv4 } = require("uuid");
const Razorpay = require("razorpay");
const Order = require("../models/orderModel");

router.post("/razorpay", async (req, res) => {
  const { amount } = req.body;

  try {
    const razorpay = new Razorpay({
      key_id: process.env.RAZORPAY_API_KEY,
      key_secret: process.env.RAZORPAY_API_SECRET, // Replace with your Razorpay Key Secret
    });

    const options = {
      amount,
      currency: "INR",
      receipt: uuidv4(),
    };

    razorpay.orders.create(options, (err, order) => {
      if (err) {
        console.error("Razorpay Order Error:", err);
        return res.status(500).json({ error: "Failed to create Razorpay order" });
      }
      res.json({
        key: process.env.RAZORPAY_API_KEY, 
        amount: order.amount,
        order_id: order.id,
      });
    });
  } catch (error) {
    console.error("Razorpay Route Error:", error);
    res.status(500).json({ error: "Failed to create Razorpay order" });
  }
});

router.post("/getuserorder", async (req, res) => {
  const { userid } = req.body;
  try {
    const orders = await Order.find({ userid }).sort({ _id: "-1" });
    res.status(200).send(orders);
  } catch (error) {
    res.status(400).json({
      message: "Something Went Wront",
      error: error.stack,
    });
  }
});

router.get("/alluserorder", async (req, res) => {
  try {
    const orders = await Order.find({});
    res.status(200).send(orders);
  } catch (error) {
    res.status(400).json({
      message: "Something Went Wront",
      error: error.stack,
    });
  }
});

router.post("/deliverorder", async (req, res) => {
  const orderid = req.body.orderid;
  try {
    const order = await Order.findOne({ _id: orderid });
    order.isDeliverd = true;
    await order.save();
    res.status(200).send("Order deliverd success");
  } catch (error) {
    res.status(400).json({
      message: "Something Went Wront",
      error: error.stack,
    });
  }
});
module.exports = router;
