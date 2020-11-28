

// Import model
const Sample = require('../models/Sample-model');


// Get all documents
exports.get = async (req, res) => {

  // Find all documents and send back to client
  Sample.find({}, (err, data) => {
    if (data === null) res.status(404).send('404'); // If not found, send 404
    else res.status(200).json(data); // Else if found, send all documents back
  });

};

// Post document
exports.post = async (req, res) => {

  try {

    // Destruct client request data
    const { title, body} = req.body;

    //Store broadcast data in object
    const document = {
      title: title,
      body: body
    };

    //Store document in DB using Mongoose
    await Sample.create(document);

    // Send document back to client
    res.status(200).json(document);

  } catch (error) {
    console.log(error);
    res.sendStatus(400);
  }

};


// Delete document
exports.delete = async (req, res) => {
  try {
    // Delete document from DB using Mongoose
    await Sample.deleteOne({title: req.body.title});

  } catch (error) {
    console.log(error);
    res.sendStatus(400);
  }
};