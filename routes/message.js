const twiloMessage = require('../send-sms');
const express = require("express");
const router = express.Router();


//Get specific order by id
module.exports = () => {
  router.post("/", (req, res) => {

    twiloMessage(req.body.message, req.body.phoneNumber)
      .then(result => {
        res.json({success:true});
      }).catch(err => {
        res.status(500).json({ error: err.message });
      });
  });
  return router;
};
