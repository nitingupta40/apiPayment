const express = require('express');
const request = require('request');
const config = require('config');
const router = express.Router();
const { check, validationResult } = require('express-validator');
// bring in normalize to give us a proper url, regardless of what user entered
const normalize = require('normalize-url');

// @route    POST api/orders/v2
// @desc     post scalapay order
// @access   Public
router.post(
  '/v2',
  [
    check('totalAmount', 'Status is required')
      .not()
      .isEmpty(),
    check('consumer.givenNames', 'Skills is required')
      .not()
      .isEmpty(),
    check('consumer.surname', 'Status is required')
      .not()
      .isEmpty(),
    check('consumer.email', 'Skills is required')
      .not()
      .isEmpty()
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const options = {
        uri: `https://staging.api.scalapay.com/v2/orders`,
        method: 'POST',
        headers: {
          'user-agent': 'node.js',
          Accept: 'application/json',
          Authorization: 'Bearer qhtfs87hjnc12kkos'
        },
        form: req.body
      };
      request(options, (error, response, body) => {
        if (error) console.error(error);
        if (response.statusCode !== 200) {
          return res.status(404).json({ msg: 'No configuration Found' });
        }
        res.json(JSON.parse(body));
      });
    } catch (err) {
      console.error(err.message);
      return res.status(500).json({ msg: 'Server Error' });
    }
  }
);

module.exports = router;
