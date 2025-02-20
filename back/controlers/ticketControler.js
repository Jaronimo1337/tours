const { createTicket, getTicket } = require("../models/ticketModel");

exports.createTicket = async (req, res) => {
  try {
    const ticket = await createTicket(req.body);
    res.status(201).json({
      status: "success",
      data: ticket,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
exports.getTicket = async (req, res) => {
  try {
    const ticket = await getTicket();
    res.status(200).json(ticket);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};