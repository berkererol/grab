/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into api/users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require("express");
const router = express.Router();

module.exports = db => {
  router.get("/", (req, res) => {
    db.query(`SELECT * FROM carts`)
      .then(data => {
        const carts = data.rows;
        res.json({ carts });
      })
      .catch(err => {
        res.status(500).json({ error: err.message });
      });
  });

  //Get specific cart by id
  router.get("/:id", (req, res) => {
    const id = parseInt(req.params.id);
    db.query(`SELECT * FROM carts WHERE id = $1`, [id])
      .then(data => {
        const cart = data.rows;
        res.json({ cart });
      })
      .catch(err => {
        res.status(500).json({ error: err.message });
      });
  });

  //Post to cart
  router.post("/", (req, res) => {
    const { userID, menuItemID, quantity, comment } = req.body;
    console.log(req.body);
    db.query(
      `INSERT INTO carts (user_id, menu_item_id, quantity, comment ) VALUES ($1,$2,$3,$4) RETURNING *`,
      [userID, menuItemID, quantity, comment]
    )
      .then(data => {
        const carts = data;
        res.json({ carts });
      })
      .catch(err => {
        res.status(500).json({ error: err.message });
      });
  });

  //Delete specific cart by id
  router.delete("/delete/:id", (req, res) => {
    const id = parseInt(req.params.id);
    db.query(`DELETE  FROM carts WHERE id = $1 RETURNING *`, [id])
      .then(data => {
        const cart = data.rows;
        res.json({ cart });
      })
      .catch(err => {
        res.status(500).json({ error: err.message });
      });
  });

  return router;
};
