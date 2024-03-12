const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const UsersModels = require("./models/Users");
require("dotenv").config();

const port = 7000;
const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.DB_URI);

// Endpoint to check if mobile number already exists
app.post("/checkMobile", async (req, res) => {
  const { mobileNumber } = req.body;
  try {
    const user = await UsersModels.findOne({ mobileNumber });
    if (user) {
      // Mobile number already exists
      return res.json({ exists: true });
    } else {
      // Mobile number doesn't exist
      return res.json({ exists: false });
    }
  } catch (error) {
    console.error("Error checking mobile number:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
});

// Endpoint to save user details
app.post("/details", async (req, res) => {
  try {
    const newUser = await UsersModels.create(req.body);
    res.json(newUser);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
