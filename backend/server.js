const express = require("express");
const app = express();
const routes = require("./routes");

const mongoose = require("mongoose");
require("dotenv").config();

//const dbconfig = require('./db');

const PORT = process.env.PORT || 3001;

mongoose.connect("mongodb://localhost:27017/mern-queue", {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useCreateIndex: true,
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


if (process.env.NODE_ENV === "production") {
	app.use(express.static("client/build"));
	app.get("*", (req, res) =>
	//telling path model to join our current directory name
	res.sendFile(path.join(__dirname, "../client/build/index.html"))
);
};

app.use(routes);

app.listen(PORT, () => {
	console.log(`App is listening on http://localhost:${PORT}`);
});
