const Queue = require("../models/Queue");

exports.addToQueue = async (req, res) => {
  try {

    const { patientName, department } = req.body;

    const lastToken = await Queue.findOne({ department })
      .sort({ tokenNumber: -1 });

    const tokenNumber = lastToken ? lastToken.tokenNumber + 1 : 1;

    const newQueue = new Queue({
      patientName,
      department,
      tokenNumber
    });

    await newQueue.save();

    res.json({
      message: "Patient added to queue",
      tokenNumber
    });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};