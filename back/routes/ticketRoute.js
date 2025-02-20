const express = require('express');
const { createTicket, getTicket } = require('../controlers/ticketControler');
const router = express.Router();

router.route('/').post(createTicket).get(getTicket);

module.exports = router;