const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// MongoDB Atlas connection string
const uri = "mongodb+srv://admin:admin@mow-mentum.h0zk5sl.mongodb.net/services?retryWrites=true&w=majority";

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log("Connected to MongoDB Atlas");
}).catch((err) => {
  console.error("Error connecting to MongoDB Atlas:", err);
});

// Define schema for the "services" collection
const serviceSchema = new mongoose.Schema({
  jobname: String,
  short_description: String,
  description: String,
  image: String,
  code: String,
});

// Define the Service model directly in the server.js file
const Service = mongoose.model("Service", serviceSchema);


// Define schema for the "contacts" collection
const contactSchema = new mongoose.Schema({
  companyName: String,
  customerName: String,
  email: String,
  phoneNumber: String,
  address: String,
  helpMessage: String,
})

const Contact = mongoose.model("Contact", contactSchema);


// Define route handler for fetching services
app.get("/api/services", async (req, res) => {
  try {
    const services = await Service.find();
    res.json(services);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});


// Define route handler for submitting contact form
app.post("/api/contacts", async (req, res) => {
  const {inputCompany, inputCustomerName, inputEmail, inputPhoneNumber, inputAddress, inputMessage} = req.body;

    const contactData ={
      companyName: inputCompany,
      customerName: inputCustomerName,
      email: inputEmail,
      phoneNumber: inputPhoneNumber,
      address: inputAddress,
      helpMessage: inputMessage
    }

  try {
    const contact = new Contact(contactData);
    await contact.save();
    res.status(201).send("Contact Saved");
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error")
  }
});


// Start the server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));