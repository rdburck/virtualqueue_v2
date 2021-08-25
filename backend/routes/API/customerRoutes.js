const db = require("../../models");
const Customer = require("../../models/customer");
const router = require("express").Router();

router.post("/data", (req, res) => {
	console.log("server side", req.body);
	db.customer
		.create(req.body)
		.then((data) => {
			console.log("data", data);
			res.json(data).status(201);
		})
		.catch((err) => console.log(err));
});

router.get("/data", (req, res) => {
	console.log("get route");
	db.customer
		.find({})
		.then((data) => {
			console.log(data);
			res.json(data).status(200);
		})
		.catch((err) => console.log(err));
});

router.delete("/data", async (req, res) => {
	const waitingCustomer = await db.customer.findById(req.body._id);
	db.customer
		.findByIdAndDelete(waitingCustomer)
		.then((data) => res.json(data))
		.catch((err) => console.log(err));
});

module.exports = router;
