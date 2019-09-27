const express = require("express");
const router = express.Router();
const twiloMessage = require('../send-sms');
//Get all orders
module.exports = db => {
  router.get("/", (req, res) => {
    db.query(`SELECT * FROM placed_orders JOIN users ON placed_orders.user_id=users.id`)
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
    console.log(req.body);
    const userID = req.session.id;
    const restaurantID = 1;
    console.log(userID);
    db.query(
      `INSERT INTO placed_orders (user_id, restaurant_id, comment, final_price) VALUES ($1,$2,$3,$4) RETURNING id`,
      [userID, restaurantID, req.body.comment, req.body.finalPrice]
    )
      .then(order => {
        const placedOrderId = order.rows[0].id;
        const arrayOrders = req.body.items;
        arrayOrders.forEach(orderObj => {
          const menuItemId = orderObj.id;
          const menuItemQuantity = orderObj.quatity;
          db.query(
            `INSERT INTO order_items (user_id, restaurant_id, menu_item_id, placed_order_id, quantity) VALUES ($1, $2, $3, $4, $5)`,
            [userID, restaurantID, menuItemId, placedOrderId, menuItemQuantity]
          );
        });
        twiloMessage('Thanks for your order!!',req.body.phoneNumber);
        res.json(order.rows[0].id);
      })
      .catch(err => {
        console.log("HERE")
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
