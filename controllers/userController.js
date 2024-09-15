const userModel = require("../models/userModel"); // with this we can perform any CRUD operations on user collection

//login Callback
const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    //check if user exists
    const user = await userModel.findOne({ email, password });
    if (!user) {
      return res.status(404).send("User not found");
    }
    res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error,
    });
  }
};
//register Callback
const registerController = async (req, res) => {
  try {
    const newUser = new userModel(req.body); // creating a new user document
    await newUser.save(); // saving the document to the database
    res.status(201).json({
      success: true,
      newUser,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error,
    });
  }
};

module.exports = { loginController, registerController };
