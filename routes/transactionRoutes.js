const express = require("express");
const {
  addTransaction,
  getAllTransactions,
  editTransaction,
  deleteTransaction,
} = require("../controllers/transactionController");

//router object
const router = express.Router();

//routes
//add a transaction using POST method
router.post("/add-transaction", addTransaction);
//edit a transaction using POST method
router.post("/edit-transaction", editTransaction);
//delete a transaction using POST method
router.post("/delete-transaction", deleteTransaction);

//get allTransactions using GET method
router.post("/get-transaction", getAllTransactions); //because we are passing the userid in the body of the request
module.exports = router;
