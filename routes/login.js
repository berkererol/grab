const express = require('express');
const router  = express.Router();


module.exports = () => {

  router.get('/', (req, res) => {
    console.log("logged-in");
    req.session.id = 1;
    res.redirect('/menu');
  });

  return router;
};