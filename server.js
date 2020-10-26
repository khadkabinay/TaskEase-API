
// EXTERNAL IMPORTS
const express = require("express");
const cors = require("cors");

// INTERNAL IMPORTS
const routes = require("./routes");

// PORT
const port = process.env.PORT || 4000;
const app = express();


// Users Routes
app.use("/users", routes.user);



// middleware - JSON parsing
app.use(express.json());
app.use(cors());




// connection
app.listen(port, () => console.log(`Server is running on port ${port}`));