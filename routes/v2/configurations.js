const express = require('express');
const request = require('request');
const config = require('config');
const router = express.Router();
// bring in normalize to give us a proper url, regardless of what user entered
const normalize = require('normalize-url');

// @route    GET api/configurations/v2
// @desc     Get scalapay configuration
// @access   Public
router.get('/v2', async (req, res) => {
  try {
    const options = {
      uri: `https://staging.api.scalapay.com/v2/configurations`,
      method: 'GET',
      headers: {
        'user-agent': 'node.js',
        Accept: 'application/json',
        Authorization: 'Bearer qhtfs87hjnc12kkos'
      }
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
});

module.exports = router;
