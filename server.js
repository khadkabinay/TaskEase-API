
// EXTERNAL IMPORTS
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser")

// INTERNAL IMPORTS
const routes = require("./routes");

// PORT
const port = process.env.PORT || 4000;
const app = express();

//Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())




// Users Routes
app.use("/users", routes.user);



// middleware - JSON parsing
app.use(express.json());
app.use(cors());




// connection
app.listen(port, () => console.log(`Server is running on port ${port}`));