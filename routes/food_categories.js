const express = require('express');
const router  = express.Router();

module.exports = (db) => {
  router.get("/", (req, res) => {
    db.query(`select * from food_categories`)
      .then(data => {
        const foodCategories = data.rows;
        res.json({ foodCategories });
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });


  return router;
};


