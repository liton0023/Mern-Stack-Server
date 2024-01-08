import express from "express";
// import cors from ("express");
// const jwt = require("jsonwebtoken");
const app = express();
// const stripe = require('stripe')(process.env.PAYMENT_SECRET_KEY);
const port = process.env.PORT || 5000;
// middleweres
// app.use(cors());
app.use(express.json());




app.get("/", (req, res) => {
    res.send("boss in running");
  });
  
  app.listen(port, () => {
    console.log(`Bistro Boss is running on ${port}`);
  });