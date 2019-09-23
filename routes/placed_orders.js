/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into api/users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require("express");
const router = express.Router();

//Get all orders
module.exports = db => {
  router.get("/", (req, res) => {
    db.query(`SELECT * FROM placed_orders`)
      .then(data => {
        const placedOrders = data.rows;
        res.json({ placedOrders });
      })
      .catch(err => {
        res.status(500).json({ error: err.message });
      });
  });

  //Get specific order by id
  router.get("/:id", (req, res) => {
    const id = parseInt(req.params.id);
    db.query(`SELECT * FROM placed_orders WHERE id = $1`, [id])
      .then(data => {
        const order = data.rows;
        res.json({ order });
      })
      .catch(err => {
        res.status(500).json({ error: err.message });
      });
  });

  //Post to orders  ;
  router.post("/", (req, res) => {
    const { userID, restaurantID, comments, priceBeforeTax, tax, finalPrice, createdAt, foodReady, smsSent} = req.body;
    console.log(req.body);
    db.query(
      `INSERT INTO placed_orders (user_id, restaurant_id, comments, price_before_tax, tax, final_price, created_at, food_ready, sms_sent) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9) RETURNING *`,
      [userID, restaurantID, comments, priceBeforeTax, tax, finalPrice, createdAt, foodReady, smsSent]
    )
      .then(data => {
        const order = data;
        res.json({ order });
      })
      .catch(err => {
        res.status(500).json({ error: err.message });
      });
  });

  //Delete specific placed order by id
  router.delete("/delete/:id", (req, res) => {
    const id = parseInt(req.params.id);
    db.query(`DELETE  FROM placed_orders WHERE id = $1 RETURNING *`, [id])
      .then(data => {
        const order = data.rows;
        res.json({ order });
      })
      .catch(err => {
        res.status(500).json({ error: err.message });
      });
  });

  return router;
};
